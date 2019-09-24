"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var core_1 = require("@actions/core");
var github_1 = require("@actions/github");
try {
    var token = core_1.getInput('GITHUB_TOKEN');
    var octokit = new github_1.GitHub(token);
    octokit.repos.createOrUpdateFile(__assign({}, github_1.context.repo, { content: 'Hello World', path: 'build/result.js', message: '[Action] build plugin list' }));
}
catch (err) {
    core_1.setFailed(err);
}
