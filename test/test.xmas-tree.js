'use strict';

const { expect } = require('chai');

const { tree } = require('../src/xmas-tree');

it('should be defined', () => {
    expect(typeof tree).to.be.equal('function');
});

it('should return string', () => {
    expect(typeof tree()).to.be.equals('string');
});

it('should return star on first level', () => {
    expect(tree(1)).to.be.equals('*');
});

it('should return stars on second level', () => {
    expect(tree(2)).to.be.equals('*\n**');
});

it('should return stars on third level', () => {
    expect(tree(3)).to.be.equals('*\n**\n***');
});

it('should return stars on 4th level', () => {
    expect(tree(4)).to.be.equals('*\n**\n***\n****');
});

it('should return my char as sign', () => {
    expect(tree(4, '-')).to.be.equals('-\n--\n---\n----');
});
