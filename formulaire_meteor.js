Entree = new Mongo.Collection("entree");

if (Meteor.isClient) {
  // This code only runs on the isClient
  Template.body.helpers({
    entree: function () {
    // Show newest tasks first
        return Entree.find({}, {sort: {createdAt: -1}}});
    }
  });

    Template.body.events({
        "submit .nouveau": function (event) {
            // This function is called when the new task form is submitted
            var nom = event.target.nom.value;
            var prenom = event.target.prenom.value;
            var adresse = event.target.adresse.value;
            var ville = event.target.ville.value;
            var enfant = event.target.enfant.value;
            var garcon = event.target.garcon.value;

            Entree.insert({
                nom: nom,
                prenom: prenom,
                adresse: adresse,
                ville: ville,
                enfant: enfant,
                createdAt: new Date() // current time
            });
            // Clear form
            event.target.nom.value = "";
            event.target.prenom.value = "";
            event.target.adresse.value = "";
            event.target.ville.value = "";
            event.target.enfant.value = "";
            event.target.garcon.value = "";
            // Prevent default form submit
            return false;
        }
    });

    Template.test.events({
        "click .delete": function () {
            Entree.remove(this._id);
        }
    });
}