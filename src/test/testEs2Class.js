'use strict'

function _typeof(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj
    }
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj
    }
  }
  return _typeof(obj)
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call
  }
  return _assertThisInitialized(self)
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }
  return self
}

function _get(target, property, receiver) {
  if (typeof Reflect !== 'undefined' && Reflect.get) {
    _get = Reflect.get
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property)
      if (!base) return
      var desc = Object.getOwnPropertyDescriptor(base, property)
      if (desc.get) {
        return desc.get.call(receiver)
      }
      return desc.value
    }
  }
  return _get(target, property, receiver || target)
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object)
    if (object === null) break
  }
  return object
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o)
      }
  return _getPrototypeOf(o)
}

// object.create() 第一个参数是原型对象，第二个参数是对应Object.defineProperties()的第二个参数
function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function')
  }
  // 使用指定的原型对象及属性去创建一个新的对象，superClass是新创建对象的原型
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  })
  if (superClass) _setPrototypeOf(subClass, superClass)
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    // 设定一个指定对象的原型到另一个对象上
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p
      return o
    }
  return _setPrototypeOf(o, p)
}

function _instanceof(left, right) {
  if (
    right != null &&
    typeof Symbol !== 'undefined' &&
    right[Symbol.hasInstance]
  ) {
    return !!right[Symbol.hasInstance](left)
  } else {
    return left instanceof right
  }
}

function _classCallCheck(instance, Constructor) {
  if (!_instanceof(instance, Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i]
    descriptor.enumerable = descriptor.enumerable || false
    descriptor.configurable = true
    if ('value' in descriptor) descriptor.writable = true
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps)
  if (staticProps) _defineProperties(Constructor, staticProps)
  return Constructor
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    })
  } else {
    obj[key] = value
  }
  return obj
}

var Anmial =
  /*#__PURE__*/
  (function() {
    function Anmial() {
      _classCallCheck(this, Anmial)

      this.name = '1'
    }

    _createClass(
      Anmial,
      [
        {
          key: 'call',
          value: function call() {
            console.log('name_', this.name)
          }
        }
      ],
      [
        {
          key: 'classMethod',
          value: function classMethod() {
            return 'hello'
          }
        }
      ]
    )

    return Anmial
  })()

_defineProperty(Anmial, 'age', 12)

var Dog =
  /*#__PURE__*/
  (function(_Anmial) {
    /**
     * 做了两件事情，1.让Dog和Anmial同源，即Dog.prototype=Aniaml.prototype,同时constructor
     * 指向Dog
     * 2.更改Dog的原型对象到Anmial
     *
     */

    _inherits(Dog, _Anmial)

    function Dog() {
      _classCallCheck(this, Dog)
      // _getPrototypeOf返回原型对象，Dog原型对象就是Anmial
      // _getPrototypeOf(Dog).call(this) 就是this绑定Anmial一些列方法
      return _possibleConstructorReturn(this, _getPrototypeOf(Dog).call(this))
    }

    _createClass(Dog, [
      {
        key: 'm',
        value: function m() {
          return _get(_getPrototypeOf(Dog.prototype), 'call', this)
        }
      }
    ])

    return Dog
  })(Anmial)
