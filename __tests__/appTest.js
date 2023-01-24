import {checkHealth} from "../src/js/app";

test('check health test 1', () => {
    expect(checkHealth({name: 'Arture', health: 80})).toBe('healthy');
})

test('check health test 2', () => {
    expect(checkHealth({name: 'Arture', health: 40})).toBe('wounded');
})

test('check health test 3', () => {
    expect(checkHealth({name: 'Arture', health: 12})).toBe('critical');
})