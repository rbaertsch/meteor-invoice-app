AutoForm.addHooks(['PrintTemplatesInsertForm'], {
    onSuccess: function(operation, result, template) {
        Router.go("admin.printTemplates");
    },
    onError: function(operation, result, template) {
        console.log('Error');
    }
});

AutoForm.addHooks(['PrintTemplatesUpdateForm'], {
    onSuccess: function(operation, result, template) {
        Router.go("admin.printTemplates");
    },
    onError: function(operation, result, template) {
        console.log('Error');
    }
});
