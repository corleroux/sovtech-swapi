(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(2);
const express = __webpack_require__(3);
const apollo_server_express_1 = __webpack_require__(4);
const sw_schema_1 = __webpack_require__(5);
const http = __webpack_require__(8);
const cors = __webpack_require__(9);
function startApolloServer(schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = express();
        app.use(cors({
            origin: '*',
        }));
        const httpServer = http.createServer(app);
        const server = new apollo_server_express_1.ApolloServer({ schema });
        yield server.start();
        server.applyMiddleware({ app });
        const port = process.env.port || 3333;
        yield new Promise((resolve) => httpServer.listen({ port: port }, resolve));
        console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
    });
}
startApolloServer(sw_schema_1.schema);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = __webpack_require__(6);
const node_fetch_1 = __webpack_require__(7);
const BASE_URL = process.env.base_url || 'https://swapi.dev/api';
function getPersonByUrl(url) {
    console.log(url);
    return node_fetch_1.default(url)
        .then((res) => res.json())
        .catch((err) => {
        console.log('Fetch Error :-S', err);
    });
}
function getPersonBySearch(search) {
    const ret = getPersonByUrl(`${BASE_URL}/people/?search=${search}`);
    return ret;
}
function getPeoplePage(page) {
    console.log(`${BASE_URL}/people/?page=${page}`);
    const url = 'https://swapi.dev/api/people/?page=1';
    const url2 = `${BASE_URL}/people/?page=${page}`;
    //return getPersonByUrl(`${BASE_URL}/people/${page}`);
    return getPersonByUrl(url2);
}
const fetchPeople = () => {
    return getPersonByUrl(`${BASE_URL}/people`);
};
const PeopleType = new graphql_1.GraphQLObjectType({
    name: 'People',
    description: 'A people within the Star Wars universe',
    fields: () => ({
        count: { type: graphql_1.GraphQLString },
        next: { type: graphql_1.GraphQLString },
        previous: { type: graphql_1.GraphQLString },
        people: {
            type: new graphql_1.GraphQLList(PersonType),
            resolve: (people) => people.results,
        },
    }),
});
const PersonType = new graphql_1.GraphQLObjectType({
    name: 'Person',
    description: 'An individual within the Star Wars universe',
    fields: () => ({
        name: { type: graphql_1.GraphQLString },
        gender: { type: graphql_1.GraphQLString },
        skin_color: { type: graphql_1.GraphQLString },
        hair_color: { type: graphql_1.GraphQLString },
        height: { type: graphql_1.GraphQLString },
        eye_color: { type: graphql_1.GraphQLString },
        mass: { type: graphql_1.GraphQLString },
        homeworld: { type: graphql_1.GraphQLString },
        birth_year: { type: graphql_1.GraphQLString },
    }),
});
const QueryType = new graphql_1.GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        fetchPeople: {
            type: PeopleType,
            resolve: fetchPeople,
        },
        fetchPage: {
            type: PeopleType,
            args: {
                page: { type: graphql_1.GraphQLString },
            },
            resolve: (root, args) => getPeoplePage(args.page),
        },
        fetchPerson: {
            type: PeopleType,
            args: {
                name: { type: graphql_1.GraphQLString },
            },
            resolve: (root, args) => getPersonBySearch(args.name),
        },
    }),
});
const schema = new graphql_1.GraphQLSchema({
    query: QueryType,
});
exports.schema = schema;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map