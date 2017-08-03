
/* STUDENT APPLICATION */
$(function() {

    var data = {
        students: [
           {
                name: 'Slappy the Frog',
                absence:  []
           } ,
           {
                name: 'Lilly the Lizard',
                absence:  []
           },
           {
                name: 'Paulrus the Walrus',
                absence:  []
           },
           {
                name: 'Gregory the Goat',
                absence:  []
           },
           {
                name: 'Adam the Anaconda',
                absence:  []
           }
        ] ,
        countDays: 12
    }


    var controller = {

        generateData: function () {
            console.log('Creating attendance records...');

            function getRandom() {
                return (Math.random() >= 0.5);
            }

            $.each(data.students, function(index, item) {
                for(var i = 0; i < data.countDays; i++) {
                    item.absence.push(getRandom());
                }
            });
            localStorage.attendance = data;

        }   ,

        getStudents: function () {
            return data.students;
        } ,

        getCountDays: function () {
            return data.countDays;
        } ,



        init: function() {
            localStorage.clear();
            if(localStorage.attendance == null
                        || localStorage.attendance == undefined ) {
                this.generateData();
            }

            view.init();
        }
    }

    var view = {

        renderHead: function () {
            var countDays = controller.getCountDays();
            var elems = $('thead');
            var template = '';
            var thead = '';

            if(elems.length === 0)  {
                console.log('Erro ao encontrar THEAD');
                return;
            }

            thead = elems[0];

            template  = '<tr>';
            template += '     <th class="name-col">Student Name</th>';

            for(var i = 0; i < countDays; i++) {
                template += '<th>' + (i + 1) + '</th>';
            }
            template += '<th class="missed-col">Days Missed-Col</th>';

            $(thead).html(template);
        } ,

        renderBody: function () {
            var students = controller.getStudents();
            var elems    = $('tbody');
            var template = '';
            var tbody = '';

            if(elems.length === 0) {
                console.log('Erro ao recuperar TOBDY');
                return;
            }

            tbody = elems[0];

            $.each(students, function (index, item) {
                template += '<tr class="student">';
                template +=      '<td class="name-col">' + item.name + '</td>';
                var countDays = 0;

                $.each(item.absence, function(index, value) {
                    if(value)
                        countDays++;
                    template += '<td class="attend-col"><input type="checkbox"' + (value ? 'checked="checked"' : '') + '"></td>';
                });

                template += '<td>' + countDays + '</td>';

                template += '</tr>';
            });
            $(tbody).html(template);
        } ,

        renderTable: function () {
            this.renderHead();
            this.renderBody();
        } ,

        updateMissedCol: function (check) {
            var td              = $(check).parent();
            var lastTd          = {};
            var indexStudent    = td.parent().prevAll().length;
            var indexAttendance = td.prevAll().length - 1;
            var countDays = 0;

            if(!Number.isInteger(indexStudent)
                || !Number.isInteger(indexAttendance)
                ) {
                console.log('Erro ao obter index de row - col');
                return;
            }

            data.students[indexStudent].absence[indexAttendance] = check.checked;
            lastTd    = td.parent().children('td:last-child');
            countDays = parseInt(lastTd.html());

            countDays = check.checked ? countDays + 1 : countDays - 1;
            lastTd.html(countDays);
            localStorage.attendance = data;
        } ,

        initEventCheck: function () {
            var checks = $('input:checkbox').on('click', function() {
                view.updateMissedCol(this);
            });
        } ,

        init: function () {
            this.renderTable();
            this.initEventCheck();
        }
    }

    controller.init();

}());
