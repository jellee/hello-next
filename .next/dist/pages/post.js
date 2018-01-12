'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jenny/hello-next/pages/post.js?entry';


var Post = function Post(props) {
    return _react2.default.createElement(_MyLayout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement('h1', {
        className: 'jsx-1197010725',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, props.show.name), _react2.default.createElement('p', {
        className: 'jsx-1197010725',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, props.show.summary.replace(/<[/]?p>/g, '')), _react2.default.createElement('img', { src: props.show.image.medium, className: 'jsx-1197010725',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }), _react2.default.createElement('div', {
        className: 'jsx-1197010725' + ' ' + 'markdown',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement(_reactMarkdown2.default, { source: '\nThis is our blog post.\nYes. We can have a [link](/link).\nAnd we can have a title as well.\n\n### This is a title\n\nAnd here\'s the content.\n            ', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    })), _react2.default.createElement(_style2.default, {
        styleId: '1197010725',
        css: '.markdown{font-family:\'Arial\';}.markdown a{text-decoration:none;color:blue;}.markdown a:hover{opacity:0.6;}.markdown h3{margin:0;padding:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3QuanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0IyQixBQUdvQyxBQUlDLEFBS1QsQUFJSCxTQUNDLEdBSlosT0FLMkIsQ0FkM0IsQ0FJYSxXQUNiLFlBVUEiLCJmaWxlIjoicGFnZXMvcG9zdC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamVubnkvaGVsbG8tbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcyc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XG5cbmNvbnN0IFBvc3QgPSAocHJvcHMpID0+IChcbiAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+eyBwcm9wcy5zaG93Lm5hbWUgfTwvaDE+XG4gICAgICAgIDxwPnsgcHJvcHMuc2hvdy5zdW1tYXJ5LnJlcGxhY2UoLzxbL10/cD4vZywgJycpIH08L3A+XG4gICAgICAgIDxpbWcgc3JjPXtwcm9wcy5zaG93LmltYWdlLm1lZGl1bX0vPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmtkb3duXCI+XG4gICAgICAgICAgICA8TWFya2Rvd24gc291cmNlPXtgXG5UaGlzIGlzIG91ciBibG9nIHBvc3QuXG5ZZXMuIFdlIGNhbiBoYXZlIGEgW2xpbmtdKC9saW5rKS5cbkFuZCB3ZSBjYW4gaGF2ZSBhIHRpdGxlIGFzIHdlbGwuXG5cbiMjIyBUaGlzIGlzIGEgdGl0bGVcblxuQW5kIGhlcmUncyB0aGUgY29udGVudC5cbiAgICAgICAgICAgIGB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgIC5tYXJrZG93biB7XG4gICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAubWFya2Rvd24gYSB7XG4gICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAubWFya2Rvd24gYTpob3ZlciB7XG4gICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgLm1hcmtkb3duIGgzIHtcbiAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuKTtcblxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MvJHtpZH1gKTtcbiAgICBjb25zdCBzaG93ID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGNvbnNvbGUubG9nKGBGZXRjaGVkIHNob3c6ICR7c2hvdy5uYW1lfWApO1xuXG4gICAgcmV0dXJuIHsgc2hvdyB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl19 */\n/*@ sourceURL=pages/post.js?entry */'
    }));
};

Post.getInitialProps = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
        var id, res, show;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        id = context.query.id;
                        _context.next = 3;
                        return (0, _isomorphicUnfetch2.default)('https://api.tvmaze.com/shows/' + id);

                    case 3:
                        res = _context.sent;
                        _context.next = 6;
                        return res.json();

                    case 6:
                        show = _context.sent;

                        console.log('Fetched show: ' + show.name);

                        return _context.abrupt('return', { show: show });

                    case 9:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();

exports.default = Post;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3QuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiZmV0Y2giLCJNYXJrZG93biIsIlBvc3QiLCJwcm9wcyIsInNob3ciLCJuYW1lIiwic3VtbWFyeSIsInJlcGxhY2UiLCJpbWFnZSIsIm1lZGl1bSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJpZCIsInF1ZXJ5IiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sT0FBTyxTQUFQLEFBQU8sS0FBQSxBQUFDLE9BQUQ7MkJBQ1QsQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQSxBQUFNO0FBQU47QUFBQSxhQUFNLEFBQU0sS0FEaEIsQUFDSSxBQUFpQixBQUNqQix1QkFBQSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQSxBQUFLO0FBQUw7QUFBQSxhQUFLLEFBQU0sS0FBTixBQUFXLFFBQVgsQUFBbUIsUUFBbkIsQUFBMkIsWUFGcEMsQUFFSSxBQUFLLEFBQXVDLEFBQzVDLDZDQUFLLEtBQUssTUFBQSxBQUFNLEtBQU4sQUFBVyxNQUFyQixBQUEyQixtQkFBM0I7O3NCQUFBO3dCQUhKLEFBR0ksQUFDQTtBQURBO3dCQUNBLGNBQUE7NENBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQyx5Q0FBUyxRQUFWO3NCQUFBO3dCQUxSLEFBSUksQUFDSTtBQUFBOztpQkFMUjthQURTLEFBQ1Q7QUFBQTtBQURKOztBQXVDQSxLQUFBLEFBQUssOEJBQUw7d0ZBQXVCLGlCQUFBLEFBQWdCLFNBQWhCO3FCQUFBO3NFQUFBO3NCQUFBO2lEQUFBO3lCQUNYO0FBRFcsNkJBQ0osUUFESSxBQUNJLE1BREosQUFDWDt3Q0FEVzsrQkFFRCxtRUFGQyxBQUVELEFBQXNDOzt5QkFBbEQ7QUFGYSx1Q0FBQTt3Q0FBQTsrQkFHQSxJQUhBLEFBR0EsQUFBSTs7eUJBQWpCO0FBSGEsd0NBS25COztnQ0FBQSxBQUFRLHVCQUFxQixLQUxWLEFBS25CLEFBQWtDOzt5REFFM0IsRUFBRSxNQVBVLEFBT1o7O3lCQVBZO3lCQUFBO3dDQUFBOztBQUFBO29CQUFBO0FBQXZCOzt5QkFBQTtnQ0FBQTtBQUFBO0FBVUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoicG9zdC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamVubnkvaGVsbG8tbmV4dCJ9