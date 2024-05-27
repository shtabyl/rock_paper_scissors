const getRoundWinner = require('./script');

describe('getRoundWinner', () => {
    test('paper beats rock', () => {
        expect(getRoundWinner('paper', 'rock')).toEqual('computer');
    });
    test('rock beats scissors', () => {
        expect(getRoundWinner('rock', 'scissors')).toEqual('computer');
    });
    test('scissors beat paper', () => {
        expect(getRoundWinner('scissors', 'paper')).toEqual('computer');
    });
    test('paper beats rock', () => {
        expect(getRoundWinner('rock', 'paper')).toEqual('human');
    });
    test('rock beats scissors', () => {
        expect(getRoundWinner('scissors', 'rock')).toEqual('human');
    });
    test('scissors beat paper', () => {
        expect(getRoundWinner('paper', 'scissors')).toEqual('human');
    });
});
