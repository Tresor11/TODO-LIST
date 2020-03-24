const createForm = () => {
  const form = `<form action="" class="col-3 m-auto p-3" id="form">
        <div class="form-group">
          <label for="title">title</label>
          <input type="text" name="title" id="title" class="form-control" placeholder="title" aria-describedby="helpId"
            required>
        </div>

        <div class="form-group">
          <label for="description">description</label>
          <textarea class="form-control" name="description" id="description" placeholder="description"
            rows="3"></textarea>
        </div>

        <div class="form-group">
          <label for="title">Due date</label>
          <input type="date" name="date" id="date" class="form-control" aria-describedby="helpId" required>
        </div>

        <div class="form-group">
          <label for="">priority</label>
          <select class="form-control" name="" id="priority">
            <option value="Low⚪">Low⚪</option>
            <option value="Medium🔵">Medium🔵</option>
            <option value="Hign🔴">Hign🔴</option>
          </select>
        </div>
        <div class="form-group d-flex justify-content-around">
          <button type="button" class="btn btn-outline-danger" id="cancel">cancel</button>
          <button type="button" class="btn btn-outline-primary" id="create-t">Add
            task</button>
        </div>
      </form>`;
  return form;
};
export { createForm };