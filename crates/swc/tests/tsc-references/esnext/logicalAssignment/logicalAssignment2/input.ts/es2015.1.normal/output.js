var _b, _c, _foo, _foo1, _ref, _ref1;
a.baz &&= result.baz;
(_b = b).baz || (_b.baz = result.baz);
var _baz;
(_baz = (_c = c).baz) !== null && _baz !== void 0 ? _baz : _c.baz = result.baz;
a.foo["baz"] &&= result.foo.baz;
(_foo = b.foo)["baz"] || (_foo["baz"] = result.foo.baz);
var ref;
(ref = (_foo1 = c.foo)["baz"]) !== null && ref !== void 0 ? ref : _foo1["baz"] = result.foo.baz;
a.foo.bar().baz &&= result.foo.bar().baz;
(_ref = b.foo.bar()).baz || (_ref.baz = result.foo.bar().baz);
var _baz1;
(_baz1 = (_ref1 = c.foo.bar()).baz) !== null && _baz1 !== void 0 ? _baz1 : _ref1.baz = result.foo.bar().baz;
