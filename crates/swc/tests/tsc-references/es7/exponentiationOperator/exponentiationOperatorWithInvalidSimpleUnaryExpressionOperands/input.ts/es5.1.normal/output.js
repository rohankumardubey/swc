var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var temp;
// Error: incorrect type on left-hand side 
Math.pow((!--temp), 3);
Math.pow(!temp--, 3);
Math.pow(!3, 4);
Math.pow(!temp++, 4);
Math.pow(!temp--, 4);
Math.pow(!--temp, Math.pow(3, 1));
Math.pow(!temp--, Math.pow(3, 1));
Math.pow(!3, Math.pow(4, 1));
Math.pow(!temp++, Math.pow(4, 1));
Math.pow(!temp--, Math.pow(4, 1));
Math.pow(_typeof(--temp), 3);
Math.pow(_typeof(temp--), 3);
Math.pow(_typeof(3), 4);
Math.pow(_typeof(temp++), 4);
Math.pow(_typeof(temp--), 4);
Math.pow(1, Math.pow(_typeof(--temp), 3));
Math.pow(1, Math.pow(_typeof(temp--), 3));
Math.pow(1, Math.pow(_typeof(3), 4));
Math.pow(1, Math.pow(_typeof(temp++), 4));
Math.pow(1, Math.pow(_typeof(temp--), 4));
Math.pow(delete --temp, 3);
Math.pow(delete ++temp, 3);
Math.pow(delete temp--, 3);
Math.pow(delete temp++, 3);
Math.pow(1, Math.pow(delete --temp, 3));
Math.pow(1, Math.pow(delete ++temp, 3));
Math.pow(1, Math.pow(delete temp--, 3));
Math.pow(1, Math.pow(delete temp++, 3));
