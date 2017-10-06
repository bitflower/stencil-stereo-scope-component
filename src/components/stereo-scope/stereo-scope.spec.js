var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { flush, render } from '@stencil/core/testing';
import { StereoScope } from './stereo-scope';
describe('stereo-scope', () => {
    it('should build', () => {
        expect(new StereoScope()).toBeTruthy();
    });
    describe('rendering', () => {
        let element;
        beforeEach(() => __awaiter(this, void 0, void 0, function* () {
            element = yield render({
                components: [StereoScope],
                html: '<stereo-scope></stereo-scope>'
            });
        }));
        it('should work without parameters', () => {
            expect(element.textContent).toEqual('Hello, my name is  ');
        });
        it('should work a first name', () => __awaiter(this, void 0, void 0, function* () {
            element.first = 'Peter';
            yield flush(element);
            expect(element.textContent).toEqual('Hello, my name is Peter ');
        }));
        it('should work with a last name', () => __awaiter(this, void 0, void 0, function* () {
            element.last = 'Parker';
            yield flush(element);
            expect(element.textContent).toEqual('Hello, my name is  Parker');
        }));
        it('should work with both a first and a list name', () => __awaiter(this, void 0, void 0, function* () {
            element.first = 'Peter';
            element.last = 'Parker';
            yield flush(element);
            expect(element.textContent).toEqual('Hello, my name is Peter Parker');
        }));
    });
});
