$('#example1').Tabledit({
    url: 'plugins/table/jquery-tabledit/example.php',
    columns: {
        identifier: [0, 'id'],
        editable: [[1, 'nickname'], [2, 'firstname'], [3, 'email']]
    }
});

$('#example2').Tabledit({
    url: 'plugins/table/jquery-tabledit/example.php',
    editButton: false,
    deleteButton: false,
    hideIdentifier: true,
    columns: {
        identifier: [0, 'id'],
        editable: [[1, 'name'], [2, 'date'], [3, 'sales'],  [4, 'progress']]
    }
});