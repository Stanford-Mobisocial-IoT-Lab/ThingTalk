// -*- mode: js; indent-tabs-mode: nil; js-basic-offset: 4 -*-
//
// This file is part of ThingEngine
//
// Copyright 2015 Giovanni Campagna <gcampagn@cs.stanford.edu>
//
// See COPYING for details
"use strict";

const fs = require('fs');
const path = require('path');
const Q = require('q');

const Builtin = require('./builtin');
const Type = require('./type');

module.exports = class SchemaRetriever {
    constructor(client, silent) {
        this._builtins = {
            triggers: Builtin.Triggers,
            actions: Builtin.Actions,
            queries: Builtin.Queries
        };
        this._builtinMeta = {
            triggers: Builtin.TriggerMeta,
            actions: Builtin.ActionMeta,
            queries: Builtin.QueryMeta
        };
        this._schemaRequest = null;
        this._pendingSchemaRequests = [];
        this._metaRequest = null;
        this._pendingMetaRequests = [];
        this._cache = {};
        this._metaCache = {};

        this._client = client;
        this._silent = !!silent;
    }

    _ensureSchemaRequest() {
        if (this._schemaRequest !== null)
            return;

        this._schemaRequest = Q.delay(0).then(function() {
            var pending = this._pendingSchemaRequests;
            this._pendingSchemaRequests = [];
            this._schemaRequest = null;
            if (!this._silent)
                console.log('Batched schema request for ' + pending);
            return this._client.getSchemas(pending);
        }.bind(this)).then((resolved) => {
            for (var kind in resolved) {
                this._parseSchemaTypes(resolved[kind].triggers);
                this._parseSchemaTypes(resolved[kind].actions);
                this._parseSchemaTypes(resolved[kind].queries);
                this._cache[kind] = resolved[kind];
            }
            return resolved;
        });
    }

    _parseSchemaTypes(channels) {
        for (var name in channels)
            channels[name] = channels[name].map(Type.fromString);
    }

    _parseMetaTypes(channels) {
        for (var name in channels)
            channels[name].schema = channels[name].schema.map(Type.fromString);
    }

    _getFullSchema(kind) {
        if (kind === '$builtin')
            return Q(this._builtins);
        if (kind in this._cache)
            return Q(this._cache[kind]);

        if (this._pendingSchemaRequests.indexOf(kind) < 0)
            this._pendingSchemaRequests.push(kind);
        this._ensureSchemaRequest();
        return this._schemaRequest.then(function(everything) {
            if (kind in everything)
                return everything[kind];
            else
                throw new Error('Invalid kind ' + kind);
        })
    }

    _ensureMetaRequest() {
        if (this._metaRequest !== null)
            return;

        this._metaRequest = Q.delay(0).then(function() {
            var pending = this._pendingMetaRequests;
            this._pendingMetaRequests = [];
            this._metaRequest = null;
            if (!this._silent)
                console.log('Batched schema-meta request for ' + pending);
            return this._client.getMetas(pending);
        }.bind(this)).then((resolved) => {
            for (var kind in resolved) {
                this._parseMetaTypes(resolved[kind].triggers);
                this._parseMetaTypes(resolved[kind].actions);
                this._parseMetaTypes(resolved[kind].queries);
                this._metaCache[kind] = resolved[kind];
            }
            return resolved;
        });
    }

    _getFullMeta(kind) {
        if (kind === '$builtin')
            return Q(this._builtinMeta);
        if (kind in this._metaCache)
            return Q(this._metaCache[kind]);

        if (this._pendingMetaRequests.indexOf(kind) < 0)
            this._pendingMetaRequests.push(kind);
        this._ensureMetaRequest();
        return this._metaRequest.then(function(everything) {
            if (kind in everything)
                return everything[kind];
            else
                throw new Error('Invalid kind ' + kind);
        });
    }

    getSchema(kind, where, name) {
        return this._getFullSchema(kind).then((fullSchema) => {
            if (!(name in fullSchema[where]))
                throw new Error("Schema " + kind + " has no " + where + " " + name);
            return fullSchema[where][name];
        });
    }

    getMeta(kind, where, name) {
        return this._getFullMeta(kind).then((fullSchema) => {
            if (!(name in fullSchema[where]))
                throw new Error("Schema " + kind + " has no " + where + " " + name);
            return fullSchema[where][name];
        });
    }
}