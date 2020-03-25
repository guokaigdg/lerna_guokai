"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var styles_1 = require("@material-ui/styles");
var index_1 = require("../index");
var useStyle = styles_1.makeStyles({
    droppedcontent: {
        paddingTop: 4,
        cursor: "pointer"
    },
    droppingContent: {
        paddingTop: 4,
        boxShadow: "0px -2px 0px rgba(139, 199, 219, 1)",
        cursor: "pointer"
    }
});
function Draggable(props) {
    var classes = useStyle();
    var value = props.value, sortKey = props.sortKey, codeKey = props.codeKey, onClick = props.onClick;
    var _a = tslib_1.__read(react_1.useState(value), 2), newValue = _a[0], setNewValue = _a[1];
    var _b = tslib_1.__read(react_1.useState(false), 2), refresh = _b[0], setRefresh = _b[1];
    react_1.useEffect(function () {
        refresh && setTimeout(function () { return setRefresh(false); });
    }, [refresh]);
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    var guid = function () {
        return (S4() +
            S4() +
            "-" +
            S4() +
            "-" +
            S4() +
            "-" +
            S4() +
            "-" +
            S4() +
            S4() +
            S4());
    };
    var uId = guid();
    var domdrugstart = function (sort, code, uId, item, e) {
        e.dataTransfer.setData("code", code);
        e.dataTransfer.setData("uId", uId);
        e.dataTransfer.setData("item", JSON.stringify(item));
        e.dataTransfer.setData("sort", sort);
    };
    var dragenter = function (e) {
        if (e.target.className.indexOf("droppedcontent") !== -1) {
            e.target.className = classes.droppingContent;
        }
    };
    var dragleave = function (e) {
        if (e.target.className.indexOf("droppingContent") !== -1) {
            e.target.className = classes.droppedcontent;
        }
    };
    function compare(key) {
        return function (obj1, obj2) {
            if (obj1[key] < obj2[key]) {
                return -1;
            }
            else if (obj1[key] > obj2[key]) {
                return 1;
            }
            return 0;
        };
    }
    var drop = function (dropedSort, data, sortKey, dropedUid, codeKey, e) {
        e.preventDefault();
        var code = e.dataTransfer.getData("code");
        var uId = e.dataTransfer.getData("uId");
        var sort = e.dataTransfer.getData("sort");
        if (uId === dropedUid) {
            if (sort < dropedSort) {
                data.map(function (item) {
                    if (item[codeKey] === code) {
                        item[sortKey] = dropedSort;
                    }
                    else if (item[sortKey] > sort && item[sortKey] < dropedSort + 1) {
                        item[sortKey]--;
                    }
                    return item;
                });
            }
            else {
                data.map(function (item) {
                    if (item[codeKey] === code) {
                        item[sortKey] = dropedSort;
                    }
                    else if (item[sortKey] > dropedSort - 1 && item[sortKey] < sort) {
                        item[sortKey]++;
                    }
                    return item;
                });
            }
        }
        setNewValue(data);
        setRefresh(true);
        if (e.target.className.indexOf("droppingContent") !== -1) {
            e.target.style.paddingTop = 4;
            e.target.style.cursor = "pointer";
            e.target.style.boxShadow = "";
        }
    };
    var allowDrop = function (e) {
        e.preventDefault();
    };
    var createDraggleComponent = function (data, sortKey, uId, codeKey) {
        return data.sort(compare(sortKey)).map(function (item) {
            return (react_1.default.createElement("div", { className: classes.droppedcontent, key: item[codeKey] + Math.random(), draggable: true, onDragEnter: dragenter, onDragLeave: dragleave, onDragStart: function (e) {
                    return domdrugstart(item[sortKey], item[codeKey], uId, item, e);
                }, onDrop: function (e) { return drop(item[sortKey], data, sortKey, uId, codeKey, e); }, onDragOver: allowDrop },
                react_1.default.createElement(index_1.DragView, { icon: item.icon, text: item.text, children: item.nodes === undefined ? "" : item.nodes, onClick: onClick })));
        });
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { style: { display: "flex", flexDirection: "column", flexWrap: "wrap" } }, createDraggleComponent(newValue, sortKey, uId, codeKey))));
}
exports.Draggable = Draggable;
//# sourceMappingURL=index.js.map