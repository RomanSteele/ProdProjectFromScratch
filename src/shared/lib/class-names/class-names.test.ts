import { classNames } from './class-names';

describe('classNames', () => {
    test('test', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass test1 test2 hovered scrollable';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['test1', 'test2'],
        )).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'someClass test1 test2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['test1', 'test2'],
        )).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'someClass test1 test2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['test1', 'test2'],
        )).toBe(expected);
    });
});
