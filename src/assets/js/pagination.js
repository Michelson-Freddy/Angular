$(document).ready(function() {
    $('#listfile').DataTable({
        "language": {
            "lengthMenu": "Afficher _MENU_ ligne par page",
            "zeroRecords": "Auncun utilisateur à afficher",
            "info": "Afficher page _PAGE_ sur _PAGES_",
            "infoEmpty": "Auncun utilisateur à afficher",
            "infoFiltered": "(filtrer de _MAX_ colonne)"
        }
    });
} );