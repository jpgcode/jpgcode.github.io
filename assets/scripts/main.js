(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//Import component modules

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _header = require('./../../../components/header/header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
    function Controller() {
        _classCallCheck(this, Controller);

        this.componentIdAttribute = 'data-action';
        this.init();
    }

    _createClass(Controller, [{
        key: 'init',
        value: function init() {
            var matchingComponents = document.querySelectorAll('*[data-action]');
            this.initComponents(matchingComponents);
        }
    }, {
        key: 'initComponents',
        value: function initComponents(matchingComponents) {
            var _this = this;

            [].concat(_toConsumableArray(matchingComponents)).forEach(function (component) {
                var componentAttr = component.getAttribute(_this.componentIdAttribute);
                var finalName = componentAttr.charAt(0) + componentAttr.slice(1);

                // Call the components as needed
                if (finalName === _header2.default.name.toLowerCase()) new _header2.default();
            });
        }
    }]);

    return Controller;
}();

exports.default = Controller;

},{"./../../../components/header/header":3}],2:[function(require,module,exports){
'use strict';

var _controller = require('./core/controller');

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _controller2.default(); //Import and instantiate controller

},{"./core/controller":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Header = function () {
    function Header() {
        _classCallCheck(this, Header);

        //Class attributes
        this.$mobileNavIcon = $('.mobile-nav-icon');
        this.$mobileNav = $('.nav');

        //Class methods
        this.init();
    }

    /**
     * @method init - Methods that need to be fired automatically
     */


    _createClass(Header, [{
        key: 'init',
        value: function init() {
            this.eventHandlers();
        }
        /**
         * @method eventhandlers - The events related with this component
         */

    }, {
        key: 'eventHandlers',
        value: function eventHandlers() {
            var _this = this;

            this.$mobileNavIcon.on('click', function (e) {
                $(e.currentTarget).toggleClass('open');
                _this.$mobileNav.toggleClass('open');
            });
        }
    }]);

    return Header;
}();

exports.default = Header;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXNzZXRzL3NjcmlwdHMvY29yZS9jb250cm9sbGVyLmpzIiwiYXBwL2Fzc2V0cy9zY3JpcHRzL2dsb2JhbC5qcyIsImFwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVNLFU7QUFFRiwwQkFBYztBQUFBOztBQUNWLGFBQUssb0JBQUwsR0FBNEIsYUFBNUI7QUFDQSxhQUFLLElBQUw7QUFDSDs7OzsrQkFFTTtBQUNILGdCQUFNLHFCQUFxQixTQUFTLGdCQUFULENBQTBCLGdCQUExQixDQUEzQjtBQUNBLGlCQUFLLGNBQUwsQ0FBb0Isa0JBQXBCO0FBQ0g7Ozt1Q0FFYyxrQixFQUFvQjtBQUFBOztBQUMvQix5Q0FBSSxrQkFBSixHQUF3QixPQUF4QixDQUFnQyxVQUFDLFNBQUQsRUFBZTtBQUMzQyxvQkFBTSxnQkFBZ0IsVUFBVSxZQUFWLENBQXVCLE1BQUssb0JBQTVCLENBQXRCO0FBQ0Esb0JBQU0sWUFBWSxjQUFjLE1BQWQsQ0FBcUIsQ0FBckIsSUFBMEIsY0FBYyxLQUFkLENBQW9CLENBQXBCLENBQTVDOztBQUVBO0FBQ0Esb0JBQUcsY0FBYyxpQkFBTyxJQUFQLENBQVksV0FBWixFQUFqQixFQUE0QztBQUMvQyxhQU5EO0FBT0g7Ozs7OztrQkFJVSxVOzs7OztBQzVCZjs7Ozs7O0FBRUEsMkIsQ0FIQTs7O0FDQUE7Ozs7Ozs7Ozs7SUFFTSxNO0FBRUYsc0JBQWM7QUFBQTs7QUFDVjtBQUNBLGFBQUssY0FBTCxHQUFzQixFQUFFLGtCQUFGLENBQXRCO0FBQ0EsYUFBSyxVQUFMLEdBQXNCLEVBQUUsTUFBRixDQUF0Qjs7QUFFQTtBQUNBLGFBQUssSUFBTDtBQUNIOztBQUVEOzs7Ozs7OytCQUdNO0FBQ0YsaUJBQUssYUFBTDtBQUNIO0FBQ0Q7Ozs7Ozt3Q0FHZ0I7QUFBQTs7QUFFWixpQkFBSyxjQUFMLENBQW9CLEVBQXBCLENBQXVCLE9BQXZCLEVBQWdDLFVBQUMsQ0FBRCxFQUFPO0FBQ25DLGtCQUFFLEVBQUUsYUFBSixFQUFtQixXQUFuQixDQUErQixNQUEvQjtBQUNBLHNCQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsTUFBNUI7QUFDSCxhQUhEO0FBSUg7Ozs7OztrQkFJVSxNIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuLy9JbXBvcnQgY29tcG9uZW50IG1vZHVsZXNcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi8uLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXInO1xuXG5jbGFzcyBDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudElkQXR0cmlidXRlID0gJ2RhdGEtYWN0aW9uJztcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hpbmdDb21wb25lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLWFjdGlvbl0nKTtcbiAgICAgICAgdGhpcy5pbml0Q29tcG9uZW50cyhtYXRjaGluZ0NvbXBvbmVudHMpO1xuICAgIH1cblxuICAgIGluaXRDb21wb25lbnRzKG1hdGNoaW5nQ29tcG9uZW50cykge1xuICAgICAgICBbLi4ubWF0Y2hpbmdDb21wb25lbnRzXS5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEF0dHIgPSBjb21wb25lbnQuZ2V0QXR0cmlidXRlKHRoaXMuY29tcG9uZW50SWRBdHRyaWJ1dGUpO1xuICAgICAgICAgICAgY29uc3QgZmluYWxOYW1lID0gY29tcG9uZW50QXR0ci5jaGFyQXQoMCkgKyBjb21wb25lbnRBdHRyLnNsaWNlKDEpO1xuXG4gICAgICAgICAgICAvLyBDYWxsIHRoZSBjb21wb25lbnRzIGFzIG5lZWRlZFxuICAgICAgICAgICAgaWYoZmluYWxOYW1lID09PSBIZWFkZXIubmFtZS50b0xvd2VyQ2FzZSgpKSBuZXcgSGVhZGVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVyO1xuIiwiLy9JbXBvcnQgYW5kIGluc3RhbnRpYXRlIGNvbnRyb2xsZXJcbmltcG9ydCBDb250cm9sbGVyIGZyb20gJy4vY29yZS9jb250cm9sbGVyJztcblxubmV3IENvbnRyb2xsZXIoKTsiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEhlYWRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy9DbGFzcyBhdHRyaWJ1dGVzXG4gICAgICAgIHRoaXMuJG1vYmlsZU5hdkljb24gPSAkKCcubW9iaWxlLW5hdi1pY29uJyk7XG4gICAgICAgIHRoaXMuJG1vYmlsZU5hdiAgICAgPSAkKCcubmF2Jyk7XG5cbiAgICAgICAgLy9DbGFzcyBtZXRob2RzXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBtZXRob2QgaW5pdCAtIE1ldGhvZHMgdGhhdCBuZWVkIHRvIGJlIGZpcmVkIGF1dG9tYXRpY2FsbHlcbiAgICAgKi9cbiAgICBpbml0KCl7XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVycygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIGV2ZW50aGFuZGxlcnMgLSBUaGUgZXZlbnRzIHJlbGF0ZWQgd2l0aCB0aGlzIGNvbXBvbmVudFxuICAgICAqL1xuICAgIGV2ZW50SGFuZGxlcnMoKSB7XG5cbiAgICAgICAgdGhpcy4kbW9iaWxlTmF2SWNvbi5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgJChlLmN1cnJlbnRUYXJnZXQpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICB0aGlzLiRtb2JpbGVOYXYudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19
