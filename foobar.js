$(document).ready(function(){
    $('#Romance').click(function(){
     $.ajax({
      url:"roma.csv",
      dataType:"text",
      success:function(data)
      {
       var employee_data = data.split(/\r?\n|\r/);
       var table_data = '<table class="table table-bordered table-striped">';
       for(var count = 0; count<employee_data.length; count++)
       {
        var cell_data = employee_data[count].split(",");
        table_data += '<tr>';
        for(var cell_count=0; cell_count<cell_data.length; cell_count++)
        {
         if(count === 0)
         {
          table_data += '<th>'+cell_data[cell_count]+'</th>';
         }
         else
         {
          table_data += '<td>'+cell_data[cell_count]+'</td>';
         }
        }
        table_data += '</tr>';
       }
       table_data += '</table>';
       $('#employee_table').html(table_data);
      }
     });
    });
    
   });

   $(document).ready(function(){
    $('#Adult').click(function(){
     $.ajax({
      url:"ad.csv",
      dataType:"text",
      success:function(data)
      {
       var employee_data = data.split(/\r?\n|\r/);
       var table_data = '<table class="table table-bordered table-striped">';
       for(var count = 0; count<employee_data.length; count++)
       {
        var cell_data = employee_data[count].split(",");
        table_data += '<tr>';
        for(var cell_count=0; cell_count<cell_data.length; cell_count++)
        {
         if(count === 0)
         {
          table_data += '<th>'+cell_data[cell_count]+'</th>';
         }
         else
         {
          table_data += '<td>'+cell_data[cell_count]+'</td>';
         }
        }
        table_data += '</tr>';
       }
       table_data += '</table>';
       $('#employee_table').html(table_data);
      }
     });
    });
    
   });

$(document).ready(function(){
    $('#Tvseries').click(function(){
     $.ajax({
      url:"tvseries.csv",
      dataType:"text",
      success:function(data)
      {
       var employee_data = data.split(/\r?\n|\r/);
       var table_data = '<table class="table table-bordered table-striped">';
       for(var count = 0; count<employee_data.length; count++)
       {
        var cell_data = employee_data[count].split(",");
        table_data += '<tr>';
        for(var cell_count=0; cell_count<cell_data.length; cell_count++)
        {
         if(count === 0)
         {
          table_data += '<th>'+cell_data[cell_count]+'</th>';
         }
         else
         {
          table_data += '<td>'+cell_data[cell_count]+'</td>';
         }
        }
        table_data += '</tr>';
       }
       table_data += '</table>';
       $('#employee_table').html(table_data);
      }
     });
    });
    
   });

   
   $(document).ready(function(){
    $('#Animation').click(function(){
     $.ajax({
      url:"anim.csv",
      dataType:"text",
      success:function(data)
      {
       var employee_data = data.split(/\r?\n|\r/);
       var table_data = '<table class="table table-bordered table-striped">';
       for(var count = 0; count<employee_data.length; count++)
       {
        var cell_data = employee_data[count].split(",");
        table_data += '<tr>';
        for(var cell_count=0; cell_count<cell_data.length; cell_count++)
        {
         if(count === 0)
         {
          table_data += '<th>'+cell_data[cell_count]+'</th>';
         }
         else
         {
          table_data += '<td>'+cell_data[cell_count]+'</td>';
         }
        }
        table_data += '</tr>';
       }
       table_data += '</table>';
       $('#employee_table').html(table_data);
      }
     });
    });
    
   });

   $(document).ready(function(){
    $('#Action').click(function(){
     $.ajax({
      url:"act.csv",
      dataType:"text",
      success:function(data)
      {
       var employee_data = data.split(/\r?\n|\r/);
       var table_data = '<table class="table table-bordered table-striped">';
       for(var count = 0; count<employee_data.length; count++)
       {
        var cell_data = employee_data[count].split(",");
        table_data += '<tr>';
        for(var cell_count=0; cell_count<cell_data.length; cell_count++)
        {
         if(count === 0)
         {
          table_data += '<th>'+cell_data[cell_count]+'</th>';
         }
         else
         {
          table_data += '<td>'+cell_data[cell_count]+'</td>';
         }
        }
        table_data += '</tr>';
       }
       table_data += '</table>';
       $('#employee_table').html(table_data);
      }
     });
    });
    
   });

   $(document).ready(function(){
    $('#Biography').click(function(){
     $.ajax({
      url:"bio.csv",
      dataType:"text",
      success:function(data)
      {
       var employee_data = data.split(/\r?\n|\r/);
       var table_data = '<table class="table table-bordered table-striped">';
       for(var count = 0; count<employee_data.length; count++)
       {
        var cell_data = employee_data[count].split(",");
        table_data += '<tr>';
        for(var cell_count=0; cell_count<cell_data.length; cell_count++)
        {
         if(count === 0)
         {
          table_data += '<th>'+cell_data[cell_count]+'</th>';
         }
         else
         {
          table_data += '<td>'+cell_data[cell_count]+'</td>';
         }
        }
        table_data += '</tr>';
       }
       table_data += '</table>';
       $('#employee_table').html(table_data);
      }
     });
    });
    
   });


   $(document).ready(function(){
    $('#Action').click(function(){
     $.ajax({
      url:"act.csv",
      dataType:"text",
      success:function(data)
      {
       var employee_data = data.split(/\r?\n|\r/);
       var table_data = '<table class="table table-bordered table-striped">';
       for(var count = 0; count<employee_data.length; count++)
       {
        var cell_data = employee_data[count].split(",");
        table_data += '<tr>';
        for(var cell_count=0; cell_count<cell_data.length; cell_count++)
        {
         if(count === 0)
         {
          table_data += '<th>'+cell_data[cell_count]+'</th>';
         }
         else
         {
          table_data += '<td>'+cell_data[cell_count]+'</td>';
         }
        }
        table_data += '</tr>';
       }
       table_data += '</table>';
       $('#employee_table').html(table_data);
      }
     });
    });
    
   });

   $(document).ready(function(){
    $('#ALL').click(function(){
     $.ajax({
      url:"finala.csv",
      dataType:"text",
      success:function(data)
      {
       var employee_data = data.split(/\r?\n|\r/);
       var table_data = '<table class="table table-bordered table-striped">';
       for(var count = 0; count<employee_data.length; count++)
       {
        var cell_data = employee_data[count].split(",");
        table_data += '<tr>';
        for(var cell_count=0; cell_count<cell_data.length; cell_count++)
        {
         if(count === 0)
         {
          table_data += '<th>'+cell_data[cell_count]+'</th>';
         }
         else
         {
          table_data += '<td>'+cell_data[cell_count]+'</td>';
         }
        }
        table_data += '</tr>';
       }
       table_data += '</table>';
       $('#employee_table').html(table_data);
      }
     });
    });
    
   });
