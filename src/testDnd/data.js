export const initialData = {
    'tasks':{
        'task-1':{'id':'task-1', 'text':'some text for task 1'},
        'task-2':{'id':'task-2','text':'some text for task 2'},
        'task-3':{'id':'task-3', 'text':'some text for task 3'},
        'task-4':{'id':'task-4', 'text':'some text for task 4'},
        'task-5':{'id':'task-5', 'text':'some text for task 5'},
        'task-6':{'id':'task-6', 'text':'some text for task 6'},
        'task-7':{'id':'task-7', 'text':'some text for task 7'},
        'task-8':{'id':'task-8', 'text':'some text for task 8'},
    },
    'columns':{
        'column-1':{
            'id':'column-1',
            'title': 'TO DO',
            'taskIds':['task-6','task-7','task-8'],
        },
        'column-2':{
            'id':'column-2',
            'title': 'IN PROGRESS',
            'taskIds':['task-1','task-2'],
        },
        'column-3':{
            'id':'column-3',
            'title': 'DANE',
            'taskIds':[],
        },
        'column-4':{
            'id':'column-4',
            'title': 'REVIEW',
            'taskIds':[],
        }
    },

    'columnOrder': ['column-1', 'column-2','column-3', 'column-4']
};