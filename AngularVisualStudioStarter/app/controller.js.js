(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainCtrl', MainCtrl);

    function MainCtrl() {
        var vm = this;
        //button practice begin

        vm.clickCount1 = 0;
        vm.clickCount2 = 0;
        vm.clickCount3 = 0;

        vm.isDisabled1 = false;
        vm.isDisabled2 = false;
        vm.isDisabled3 = false;

        vm.textButton1 = "Click Me";
        vm.textButton2 = "Click Me";
        vm.textButton3 = "Click Me";

        vm.array = [{ "vm.max1": "10" },
                    { "vm.max2": "15" },
                    { "vm.max3": "1" }
        ];
        vm.myStyleButton1 = {
            background: 'yellow'
        };

        vm.myStyleButton2 = {
            background: 'yellow'
        };

        vm.myStyleButton3 = {
            background: 'yellow'
        };

        vm.max1 = 10;
        vm.max2 = 15;
        vm.max3 = 1;

        vm.clickIncrement1 = clickIncrement1;
        vm.clickIncrement2 = clickIncrement2;
        vm.clickIncrement3 = clickIncrement3;
        vm.reset = reset;

        function reset() {
            vm.clickCount1 = 0;
            vm.clickCount2 = 0;
            vm.clickCount3 = 0;
            vm.myStyleButton1 = { background: 'yellow' };
            vm.myStyleButton2 = { background: 'yellow' };
            vm.myStyleButton3 = { background: 'yellow' };
            vm.textButton1 = 'Click Me';
            vm.textButton2 = 'Click Me';
            vm.textButton3 = 'Click Me';
            vm.isDisabled1 = false;
            vm.isDisabled2 = false;
            vm.isDisabled3 = false;
        }

        function clickIncrement1(value, max) {
            value = value + 1;
            vm.clickCount1 = value;
            if (value == max) {
                vm.isDisabled1 = true;
                vm.textButton1 = "NO MORE";
                vm.myStyleButton1 = {
                    background: 'red'
                };
            }
        }

        function clickIncrement2(value, max) {
            value = value + 1;
            vm.clickCount2 = value;
            if (value == max) {
                vm.isDisabled2 = true;
                vm.textButton2 = "NO MORE";
                vm.myStyleButton2 = {
                    background: 'red'
                };
            }
        }

        function clickIncrement3(value, max) {
            value = value + 1;
            vm.clickCount3 = value;
            if (value == max) {
                vm.isDisabled3 = true;
                vm.textButton3 = "NO MORE";
                vm.myStyleButton3 = {
                    background: 'red'
                };
            }
        }
    }
})();