var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function App() {
    return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
            "h1",
            null,
            "React JSX szintaxis"
        ),
        React.createElement(Box, { kezd: 12, hatter: "red" }),
        React.createElement(Box, { kezd: 23, hatter: "green" }),
        React.createElement(Box, { kezd: 39, hatter: "blue" })
    );
}

function Box(_ref) {
    var kezd = _ref.kezd,
        hatter = _ref.hatter;

    var _React$useState = React.useState(kezd),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        szamlalo = _React$useState2[0],
        setSzamlalo = _React$useState2[1];

    return React.createElement(
        "div",
        { onClick: function onClick() {
                return setSzamlalo(function (prev) {
                    return prev + 1;
                });
            }, className: "p-2 m-2 rounded", style: { backgroundColor: hatter, width: "200px", height: "200px" } },
        React.createElement(
            "h2",
            null,
            "Box sz\xE1ml\xE1l\xF3:",
            szamlalo
        )
    );
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));