/*---jQuery orgChart Plugin Demo Charts----*/
var testData = [
    {id: 1, name: 'My Organization', parent: 0},
    {id: 2, name: 'CEO Office', parent: 1},
    {id: 3, name: 'Division 1', parent: 1},
    {id: 4, name: 'Division 2', parent: 1},
    {id: 6, name: 'Division 3', parent: 1},
    {id: 7, name: 'Division 4', parent: 1},
    {id: 8, name: 'Division 5', parent: 1},
    {id: 5, name: 'Sub Division', parent: 3},

];
$(function(){
    org_chart = $('#orgChart').orgChart({
        data: testData,
        showControls: true,
        allowEdit: true,
        onAddNode: function(node){ 
            log('Created new node on node '+node.data.id);
            org_chart.newNode(node.data.id); 
        },
        onDeleteNode: function(node){
            log('Deleted node '+node.data.id);
            org_chart.deleteNode(node.data.id); 
        },
        onClickNode: function(node){
            log('Clicked node '+node.data.id);
        }

    });
});

// just for example purpose
function log(text){
    $('#consoleOutput').append('<p>'+text+'</p>')
}

/*---jQuery Flowchart----*/
$(document).ready(function() {
    var data = {
      operators: {
        operator1: {
          top: 20,
          left: 20,
          properties: {
            title: 'Operator 1',
            inputs: {},
            outputs: {
              output_1: {
                label: 'Output 1',
              }
            }
          }
        },
        operator2: {
          top: 80,
          left: 300,
          properties: {
            title: 'Operator 2',
            inputs: {
              input_1: {
                label: 'Input 1',
              },
              input_2: {
                label: 'Input 2',
              },
            },
            outputs: {}
          }
        },
      }
    };

    // Apply the plugin on a standard, empty div...
    $('#example').flowchart({
      data: data
    });
  });
  var operatorI = 0;
    $('#create_operator').click(function() {
      var operatorId = 'created_operator_' + operatorI;
      var operatorData = {
        top: 60,
        left: 500,
        properties: {
          title: 'Operator ' + (operatorI + 3),
          inputs: {
            input_1: {
              label: 'Input 1',
            }
          },
          outputs: {
            output_1: {
              label: 'Output 1',
            }
          }
        }
      };

      operatorI++;

      $('#example').flowchart('createOperator', operatorId, operatorData);
    });

    $('#delete_selected_button').click(function() {
      $('#example').flowchart('deleteSelected');
    });
    
    
/*---jQuery Daigram----*/
$(function(){
    $('.mindmap').mindmap();
});