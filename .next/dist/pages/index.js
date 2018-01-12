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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jenny/hello-next/pages/index.js?entry';


var PostLink = function PostLink(_ref) {
    var post = _ref.post;
    return _react2.default.createElement('li', {
        className: 'jsx-1007664463',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement(_link2.default, { as: '/p/' + post.id, href: '/post?id=' + post.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement('a', {
        className: 'jsx-1007664463',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, post.name)), _react2.default.createElement(_style2.default, {
        styleId: '1007664463',
        css: 'li.jsx-1007664463{list-style:none;margin:5px 0;}a.jsx-1007664463{text-decoration:none;color:blue;font-family:"Arial";}a.jsx-1007664463:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNvQixBQUdpQyxBQUtLLEFBS0osWUFBQyxJQVRMLEtBS0YsUUFKZixHQUt3QixvQkFDeEIiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2plbm55L2hlbGxvLW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5jb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxuICAgIDxsaT5cbiAgICAgICAgPExpbmsgYXM9e2AvcC8ke3Bvc3QuaWR9YH0gaHJlZj17YC9wb3N0P2lkPSR7cG9zdC5pZH1gfT5cbiAgICAgICAgICAgIDxhPnsgcG9zdC5uYW1lIH08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGE6aG92ZXIgeyBvcGFjaXR5OiAwLjY7IH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvbGk+XG4pO1xuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT5CYXRtYW4gVFYgU2hvd3M8L2gxPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICB7IHByb3BzLnNob3dzLm1hcCgoeyBzaG93IH0pID0+IChcbiAgICAgICAgICAgICAgICA8UG9zdExpbmsga2V5PXsgc2hvdy5pZCB9IHBvc3Q9eyBzaG93IH0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBoMSwgYSB7IGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7IH1cbiAgICAgICAgICAgIHVsIHsgcGFkZGluZzogMDsgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4pXG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJyk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuICBDb3VudDogJHtkYXRhLmxlbmd0aH1gKTtcblxuICAgIHJldHVybiB7IHNob3dzOiBkYXRhIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
    }));
};

var Index = function Index(props) {
    return _react2.default.createElement(_MyLayout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    }, _react2.default.createElement('h1', {
        className: 'jsx-4229409833',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }, 'Batman TV Shows'), _react2.default.createElement('ul', {
        className: 'jsx-4229409833',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, props.shows.map(function (_ref2) {
        var show = _ref2.show;
        return _react2.default.createElement(PostLink, { key: show.id, post: show, __source: {
                fileName: _jsxFileName,
                lineNumber: 32
            }
        });
    })), _react2.default.createElement(_style2.default, {
        styleId: '4229409833',
        css: 'h1.jsx-4229409833,a.jsx-4229409833{font-family:"Arial";}ul.jsx-4229409833{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDb0IsQUFFd0MsQUFDYixVQUFDLFVBRGEiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2plbm55L2hlbGxvLW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5jb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxuICAgIDxsaT5cbiAgICAgICAgPExpbmsgYXM9e2AvcC8ke3Bvc3QuaWR9YH0gaHJlZj17YC9wb3N0P2lkPSR7cG9zdC5pZH1gfT5cbiAgICAgICAgICAgIDxhPnsgcG9zdC5uYW1lIH08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGE6aG92ZXIgeyBvcGFjaXR5OiAwLjY7IH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvbGk+XG4pO1xuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT5CYXRtYW4gVFYgU2hvd3M8L2gxPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICB7IHByb3BzLnNob3dzLm1hcCgoeyBzaG93IH0pID0+IChcbiAgICAgICAgICAgICAgICA8UG9zdExpbmsga2V5PXsgc2hvdy5pZCB9IHBvc3Q9eyBzaG93IH0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBoMSwgYSB7IGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7IH1cbiAgICAgICAgICAgIHVsIHsgcGFkZGluZzogMDsgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4pXG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJyk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuICBDb3VudDogJHtkYXRhLmxlbmd0aH1gKTtcblxuICAgIHJldHVybiB7IHNob3dzOiBkYXRhIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
    }));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var res, data;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return (0, _isomorphicUnfetch2.default)('http://api.tvmaze.com/search/shows?q=batman');

                case 2:
                    res = _context.sent;
                    _context.next = 5;
                    return res.json();

                case 5:
                    data = _context.sent;

                    console.log('Show data fetched.  Count: ' + data.length);

                    return _context.abrupt('return', { shows: data });

                case 8:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsIkxpbmsiLCJmZXRjaCIsIlBvc3RMaW5rIiwicG9zdCIsImlkIiwibmFtZSIsIkluZGV4IiwicHJvcHMiLCJzaG93cyIsIm1hcCIsInNob3ciLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sV0FBVyxTQUFYLEFBQVcsZUFBQTtRQUFBLEFBQUcsWUFBSCxBQUFHOzJCQUNoQixjQUFBO21CQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLEFBQUMsZ0NBQUssWUFBVSxLQUFoQixBQUFxQixJQUFNLG9CQUFrQixLQUE3QyxBQUFrRDtzQkFBbEQ7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBLEFBQUs7QUFBTDtBQUFBLFlBRlIsQUFDSSxBQUNJLEFBQVU7aUJBRmxCO2FBRGEsQUFDYjtBQUFBO0FBREo7O0FBc0JBLElBQU0sUUFBUSxTQUFSLEFBQVEsTUFBQSxBQUFDLE9BQUQ7MkJBQ1YsQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FESixBQUNJLEFBQ0Esb0NBQUEsY0FBQTttQkFBQTs7c0JBQUE7d0JBQUEsQUFDTTtBQUROO0FBQUEsYUFDTSxBQUFNLE1BQU4sQUFBWSxJQUFJLGlCQUFBO1lBQUEsQUFBRyxhQUFILEFBQUc7NkNBQ2pCLEFBQUMsWUFBUyxLQUFNLEtBQWhCLEFBQXFCLElBQUssTUFBMUIsQUFBaUM7MEJBQWpDOzRCQURjLEFBQ2Q7QUFBQTtTQUFBO0FBSlosQUFFSSxBQUNNO2lCQUhWO2FBRFUsQUFDVjtBQUFBO0FBREo7O0FBZUEsTUFBQSxBQUFNLDJGQUFrQixtQkFBQTthQUFBO2tFQUFBO2tCQUFBOzZDQUFBO3FCQUFBO29DQUFBOzJCQUNGLGlDQURFLEFBQ0YsQUFBTTs7cUJBQWxCO0FBRGMsbUNBQUE7b0NBQUE7MkJBRUQsSUFGQyxBQUVELEFBQUk7O3FCQUFqQjtBQUZjLG9DQUlwQjs7NEJBQUEsQUFBUSxvQ0FBa0MsS0FKdEIsQUFJcEIsQUFBK0M7O3FEQUV4QyxFQUFFLE9BTlcsQUFNYixBQUFTOztxQkFOSTtxQkFBQTtvQ0FBQTs7QUFBQTtnQkFBQTtBQUF4QixBQVNBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZW5ueS9oZWxsby1uZXh0In0=