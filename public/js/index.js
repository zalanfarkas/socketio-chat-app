var socket = io();

socket.on("room-list", (rooms) => {
    if (rooms.length > 0) {
        var select = jQuery('<select name="room" id="select-field"></select>');
        var option;
        select.append(jQuery('<option disabled selected="selected" value> -- Select or Create Room -- </option>'));
        select.append(jQuery('<option value="new">Add New Room</option>'));
        select.append(jQuery('<option disabled value> -- Available Rooms -- </option>'));
        rooms.forEach(function(room) {
            option = jQuery("<option></option>").val(room);
            option.text(room);
            select.append(option);
        });
        jQuery("#room-field").append(select);
    } else {
        jQuery("#room-field").html(jQuery('<label>Room name</label><input type="text" name="room"/>'));
    }


    jQuery("select").on("change", function(){
        if (this.value === "new"){
            jQuery("#new-room").html(jQuery('<input type="text" name="new-room" autofocus placeholder="Add new room"/>'));
        } else {
            jQuery("#new-room").html("");
        }
    });
});
