
// JS tree          Custom script goes here

$('#jstree').jstree({
    "core" : {
        "themes" : {
            "responsive": false
        }, 
        // so that create works
        "check_callback" : true,
        'data': [{
                "text": "Parent Node",
                "children": [{
                    "text": "Initially selected",
                    "state": {
                        "selected": true
                    }
                }, {
                    "text": "Custom Icon",
                    "icon": "flaticon-warning font-danger"
                }, {
                    "text": "Initially open",
                    "icon" : "flaticon-calendar-bold font-success",
                    "state": {
                        "opened": true
                    },
                    "children": [
                        {"text": "Another node", "icon" : "flaticon-file font-waring"}
                    ]
                }, {
                    "text": "Custom Icon",
                    "icon": "flaticon-calendar-bold font-waring"
                }, {
                    "text": "Disabled Node",
                    "icon": "flaticon-calendar-bold font-success",
                    "state": {
                        "disabled": true
                    }
                }, {
                    "text": "Settings Files",
                    "icon": "flaticon-settings-4 font-danger",
                    "children": [
                        {"text": "Item 1", "icon" : "flaticon-file font-waring"},
                        {"text": "Item 2", "icon" : "flaticon-file font-success"},
                        {"text": "Item 3", "icon" : "flaticon-file font-default"},
                        {"text": "Item 4", "icon" : "flaticon-file font-danger"},
                        {"text": "Item 5", "icon" : "flaticon-file font-info"}
                    ]
                }]
            },
            "Another Node"
        ]
    },

    "types" : {
        "default" : {
            "icon" : "fa fa-folder"
        },
        "file" : {
            "icon" : "fa fa-file"
        }
    },
 });


 $('#jstree1').jstree({
    'plugins': ["wholerow", "checkbox", "types"],
    "core" : {
        "themes" : {
            "responsive": false
        }, 
        // so that create works
        "check_callback" : true,
        'data': [{
                "text": "Parent Node",
                "children": [{
                    "text": "Initially selected",
                    "state": {
                        "selected": true
                    }
                }, {
                    "text": "Custom Icon",
                    "icon": "flaticon-warning font-danger"
                }, {
                    "text": "Initially open",
                    "icon" : "flaticon-calendar-bold font-success",
                    "state": {
                        "opened": true
                    },
                    "children": [
                        {"text": "Another node", "icon" : "flaticon-file font-waring"}
                    ]
                }, {
                    "text": "Custom Icon",
                    "icon": "flaticon-calendar-bold font-waring"
                }, {
                    "text": "Disabled Node",
                    "icon": "flaticon-calendar-bold font-success",
                    "state": {
                        "disabled": true
                    }
                }, {
                    "text": "Settings Files",
                    "icon": "flaticon-settings-4 font-danger",
                    "children": [
                        {"text": "Item 1", "icon" : "flaticon-file font-waring"},
                        {"text": "Item 2", "icon" : "flaticon-file font-success"},
                        {"text": "Item 3", "icon" : "flaticon-file font-default"},
                        {"text": "Item 4", "icon" : "flaticon-file font-danger"},
                        {"text": "Item 5", "icon" : "flaticon-file font-info"}
                    ]
                }]
            },
            "Another Node"
        ]
    },

    "types" : {
        "default" : {
            "icon" : "fa fa-folder"
        },
        "file" : {
            "icon" : "fa fa-file"
        }
    },
 });




$('#dragndrop-tree').jstree({
    "state" : { "key" : "demo2" },
    "plugins" : [ "dnd", "state", "types" ],
    "core" : {
        "themes" : {
            "responsive": false
        }, 
        // so that create works
        "check_callback" : true,
        'data': [{
                "text": "Parent Node",
                "children": [{
                    "text": "Initially selected",
                    "state": {
                        "selected": true
                    }
                }, {
                    "text": "Custom Icon",
                    "icon": "flaticon-warning font-danger"
                }, {
                    "text": "Initially open",
                    "icon" : "flaticon-calendar-bold font-success",
                    "state": {
                        "opened": true
                    },
                    "children": [
                        {"text": "Another node", "icon" : "flaticon-file font-waring"}
                    ]
                }, {
                    "text": "Custom Icon",
                    "icon": "flaticon-calendar-bold font-waring"
                }, {
                    "text": "Disabled Node",
                    "icon": "flaticon-calendar-bold font-success",
                    "state": {
                        "disabled": true
                    }
                }, {
                    "text": "Settings Files",
                    "icon": "flaticon-settings-4 font-danger",
                    "children": [
                        {"text": "Item 1", "icon" : "flaticon-file font-waring"},
                        {"text": "Item 2", "icon" : "flaticon-file font-success"},
                        {"text": "Item 3", "icon" : "flaticon-file font-default"},
                        {"text": "Item 4", "icon" : "flaticon-file font-danger"},
                        {"text": "Item 5", "icon" : "flaticon-file font-info"}
                    ]
                }]
            },
            "Another Node"
        ]
    },

    "types" : {
        "default" : {
            "icon" : "flaticon-file"
        },
        "file" : {
            "icon" : "flaticon-file"
        }
    },
 });



// DESIGN.js    Custom Script goes here


function tree_add_leaf_example_click(leaf, node, pnode, tree){
    tree.addLeaf(node, "Leaf item");
}

function tree_add_root_runtime_example_click(){
    var tree = $("#tree_add_leaf_runtime_example").data("treeview");

    tree.addLeaf(false, "Root");
}
function tree_add_leaf_runtime_example_click(){
    var tree = $("#tree_add_leaf_runtime_example").data("treeview");
    var node = tree.element.find('li.active');

    tree.addLeaf(node, "Leaf item");
}

function tree_add_root_runtime_example_click2(){
    var tree = $("#tree_add_leaf_runtime_example2").data("treeview");

    tree.addLeaf(false, "Root");
}
function tree_add_leaf_checkbox_example_click(){
    var tree = $("#tree_add_leaf_runtime_example2").data("treeview");
    var node = tree.element.find('li.active');

    tree.addLeaf(node, "Leaf item", {
        mode: 'checkbox'
    });
}
function tree_add_leaf_radio_example_click(){
    var tree = $("#tree_add_leaf_runtime_example2").data("treeview");
    var node = tree.element.find('li.active');

    tree.addLeaf(node, "Leaf item", {
        mode: 'radio',
        name: 'r1'
    });
}