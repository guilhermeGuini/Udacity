(function(){

    var strReplace = '%data%';
    var skills     = ["programming","teaching","JS","C#","HTML/CSS"];

    var data = {
        "bio": {
            "nome"           : 'Guilherme Silva Guini',
            "idade"          : 24,
            "skills"         : skills,
            "funcao"         : 'Web/Mobile Developer',
            "contact"        : '(18) 99774-6090',
            "pictureUrl"     : 'images/foto.jpg',
            "welcomeMessage" : 'Bem-vindo!'
        }
    }

    var controller = {

        getBio: function () {
            return data.bio;
        },

        init: function () {
            view.init();
        }
    }

    var view = {

        loadData: function () {
            var bio = controller.getBio();
            var divHeader = $('#header');
            var main      = $('#main');
            var divContact = $('#topContacts');

            divHeader.append(HTMLheaderName.replace(strReplace, bio.nome));
            divHeader.append(HTMLheaderRole.replace(strReplace, bio.funcao));
            main.append(bio.skills);
            divContact.append(HTMLcontactGeneric.replace(strReplace, bio.contact));
            divHeader.append(HTMLwelcomeMsg.replace(strReplace, bio.welcomeMessage));
        },

        init: function () {
            this.loadData();
        }
    }

    controller.init();

})();