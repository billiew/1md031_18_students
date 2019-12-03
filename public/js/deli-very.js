/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#customer',
  data: {
    custInfo: "",
    orderInfo: "",
    orderDone: "",
    orders: {},
    details: {x: 0, y: 0}
  },
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
  },
  methods: {
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;

    },
    addOrder: function (event) {
      var infoText="";
      var info = getTextFields();
      for (i in info){
        infoText = infoText+info[i]+", ";
      }
      this.orderDone = "ORDER CONFIRMATION";
      this.custInfo = "Customer details: "+infoText;
      this.orderInfo = "Order summary: "+getBurgers();
      console.log("hellooo");
      socket.emit("addOrder", { orderId: this.getNext(),
                                details: { x: this.details.x,
                                           y: this.details.y},
                                orderItems: [getBurgers()],
                                customerInf:infoText
                              } );
                            },

    displayOrder: function (event) {
        var offset = {x: event.currentTarget.getBoundingClientRect().left,
                      y: event.currentTarget.getBoundingClientRect().top};
        this.details = {x: event.clientX-10 - event.currentTarget.getBoundingClientRect().left,
                        y: event.clientY-10 - event.currentTarget.getBoundingClientRect().top }
                                  }
              }
});
