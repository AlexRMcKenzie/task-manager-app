import { useState } from 'react';

const [state, setState] = useState(initialState);

const AddTask = ({onSave}) => {
  const [text, setText] = useState('');
  const [day, setDay] = use state('');
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="add task" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="form-control">

      </div>
    </form>
  )
}
