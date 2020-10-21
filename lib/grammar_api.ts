// -*- mode: typescript; indent-tabs-mode: nil; js-basic-offset: 4 -*-
//
// This file is part of ThingTalk
//
// Copyright 2017-2020 The Board of Trustees of the Leland Stanford Junior University
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// Author: Giovanni Campagna <gcampagn@cs.stanford.edu>

import * as Grammar from './grammar';
import * as Ast from './ast';
import type SchemaRetriever from './schema';
import type Type from './type';

/**
 * APIs to parse surface-syntax ThingTalk code.
 *
 * @namespace
 * @alias Grammar
 */

/**
 * Parse a string into a ThingTalk {@link Ast}
 *
 * @param {string} code - the ThingTalk code to parse
 * @return {Ast.Input} the parsed program, library or permission rule
 */
export function parse(code : string) : Ast.Input {
    // workaround grammar bug with // comments at the end of input
    return Grammar.parse(code + '\n');
}

/**
 * Parse a string into a ThingTalk {@link Ast} and typecheck it
 *
 * This is a convenience method that combines {@link Grammar.parse} and
 * {@link Ast.Input#typecheck}.
 *
 * @param {string} code - the ThingTalk code to parse
 * @param {SchemaRetriever} schemaRetriever - the delegate object to retrieve type information
 * @param {boolean} useMeta - attach metadata to the typechecked AST
 * @return {Ast.Input} the parsed program, library or permission rule
 * @async
 */
export function parseAndTypecheck(code : string,
                                  schemaRetriever : SchemaRetriever, useMeta = false) : Promise<Ast.Input> {
    // workaround grammar bug with // comments at the end of input
    const ast = Grammar.parse(code + '\n');
    return ast.typecheck(schemaRetriever, useMeta);
}

/**
 * Parse a type string into a {@link Type} object.
 *
 * @param {string} typeStr - the ThingTalk type reference to parse
 * @return {Type} the type object
 */
export function parseType(typeStr : string) : Type {
    return Grammar.parse(typeStr, { startRule: 'type_ref' });
}

/**
 * Parse a string into a ThingTalk permission rule
 *
 * @param {string} code - the ThingTalk code to parse
 * @return {Ast.PermissionRule} the parsed permission rule
 * @deprecated use {@link Grammar.parse}
 */
export function parsePermissionRule(code : string) : Ast.PermissionRule {
    return Grammar.parse(code, { startRule: 'permission_rule' });
}
