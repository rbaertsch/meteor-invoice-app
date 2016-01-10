PrintTemplates = new Mongo.Collection('printTemplates');

PrintTemplates.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "Name of the print template",
        max: 200
    },
    collection: {
        type: String,
        label: "Name of the collection",
        max: 200
    },
    "ownedByCompanyId": {
        type: String,
        label: "Owned by company ID",
        autoform: {
            type: "select",
            options: function () {
                var query = {},
                    companies = Companies.find(query, {fields: {_id:1, name:1}}).fetch(),
                    ret = companies.map(function(obj) {
                        return {
                            value: obj._id,
                            label: obj.name
                        }
                    });

                return ret;
            }
        }
    },
    pageSizeX: {
        type: Number,
        label: "Page Size X"
    },
    pageSizeY: {
        type: Number,
        label: "Page Size Y"
    },
    pageMarginTop: {
        type: Number,
        label: "Page Margin Top"
    },
    pageMarginBottom: {
        type: Number,
        label: "Page Margin Bottom"
    },
    pageMarginLeft: {
        type: Number,
        label: "Page Margin Left"
    },
    pageMarginRight: {
        type: Number,
        label: "Page Margin Right"
    },

    fields: {
        type: Array,
        label: "Fields"
    },
    "fields.$": {
        type: Object
    },
    "fields.$.name": {
        type: String,
        label: "Field name",
        max: 200
    },
    "fields.$.labelTop": {
        type: Number,
        label: "Label top measurements"
    },
    "fields.$.labelRight": {
        type: Number,
        label: "Label right measurements"
    },
    "fields.$.labelBottom": {
        type: Number,
        label: "Label bottom measurements"
    },
    "fields.$.labelLeft": {
        type: Number,
        label: "Label left measurements"
    },
    "fields.$.valueTop": {
        type: Number,
        label: "Value top measurements"
    },
    "fields.$.valueRight": {
        type: Number,
        label: "Value right measurements"
    },
    "fields.$.valueBottom": {
        type: Number,
        label: "Value bottom measurements"
    },
    "fields.$.valueLeft": {
        type: Number,
        label: "Value left measurements"
    }
}));

PrintTemplates.allow({
    insert: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});

if (Meteor.isServer) {
    Meteor.publish("printTemplates", function () {
        return PrintTemplates.find({});
    });
}