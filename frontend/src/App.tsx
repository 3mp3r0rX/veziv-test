import  { useReducer } from 'react';
import { WorkForm } from './components/WorkForm';
import { WorkList } from './components/WorkList';
import { Work } from './models/Work';

type Action =
    | { type: 'CREATE'; payload: Work }
    | { type: 'UPDATE'; payload: Work }
    | { type: 'DELETE'; id: string };

const workReducer = (state: Work[], action: Action): Work[] => {
    switch (action.type) {
        case 'CREATE':
            return [...state, action.payload];
        case 'UPDATE':
            return state.map(work => work.id === action.payload.id ? action.payload : work);
        case 'DELETE':
            return state.filter(work => work.id !== action.id);
        default:
            return state;
    }
};

const App = () => {
    const [works, dispatch] = useReducer(workReducer, []);

    const addWork = (work: Work) => dispatch({ type: 'CREATE', payload: work });
    const deleteWork = (id: string) => dispatch({ type: 'DELETE', id });

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-8">My Portfolio</h1>
            <WorkForm onSubmit={addWork} />
            <WorkList works={works} onDelete={deleteWork} />
        </div>
    );
};

export default App;
