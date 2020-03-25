"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var index_1 = require("../../../index");
var styles_1 = require("@material-ui/styles");
var useStyle = styles_1.makeStyles({
    Wrap: {
        width: "100%"
    }
});
function DragGroupView(props) {
    var data = props.data, onClick = props.onClick;
    var classes = useStyle();
    return (react_1.default.createElement("div", { className: classes.Wrap },
        react_1.default.createElement(index_1.Draggable, { value: data, sortKey: "sort", codeKey: "code", onClick: onClick })));
}
exports.DragGroupView = DragGroupView;
function SelectGroupView(props) {
    var data = props.data, onClick = props.onClick;
    var classes = useStyle();
    var _a = tslib_1.__read(react_1.useState(""), 2), color = _a[0], Setcolor = _a[1];
    var handlecolor = function (newcolor) {
        Setcolor(newcolor);
    };
    return (react_1.default.createElement("div", { className: classes.Wrap }, data.map(function (item, index) { return (react_1.default.createElement("div", { key: index + index, onClick: function () {
            handlecolor(item.color);
        } },
        react_1.default.createElement(index_1.ColorView, { color: item.color, text: item.text, children: color === item.color
                ? {
                    object: "sub_component",
                    type: "selected_icon"
                }
                : "", onClick: onClick }))); })));
}
exports.SelectGroupView = SelectGroupView;
//# sourceMappingURL=index.js.map