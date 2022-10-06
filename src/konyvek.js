"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Konyv_nev, _Konyv_ertek;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Konyv = void 0;
class Konyv {
    constructor(nev, ertek) {
        _Konyv_nev.set(this, void 0);
        _Konyv_ertek.set(this, void 0);
        __classPrivateFieldSet(this, _Konyv_nev, nev, "f");
        if (ertek >= 1 && ertek <= 10) {
            __classPrivateFieldSet(this, _Konyv_ertek, ertek, "f");
        }
        else {
            throw new Error("Csak 1 és 10 között lehet megadni értékelést!");
        }
    }
    toString() {
        return "Könyv neve: " + __classPrivateFieldGet(this, _Konyv_nev, "f") + " Könyv értékelése: " + __classPrivateFieldGet(this, _Konyv_ertek, "f");
    }
    get nev() {
        return __classPrivateFieldGet(this, _Konyv_nev, "f");
    }
    get ertek() {
        return __classPrivateFieldGet(this, _Konyv_ertek, "f");
    }
}
exports.Konyv = Konyv;
_Konyv_nev = new WeakMap(), _Konyv_ertek = new WeakMap();
