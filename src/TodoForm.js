import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
}));

export const TodoForm = ({ todo, onSubmit }) => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            text: todo ? todo.text : "",
            description: todo ? todo.description : ""
        }
    });
    const classes = useStyles();

    const submitHandler = handleSubmit((data) => {
        onSubmit(data)
    })
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="text">Text:</label>
                <input {...register('text')} className="form-control" type="text" name="text" id="text" />

                <label htmlFor="description">Description:</label>
                <input {...register('description')} className="form-control" type="text" name="description" id="description" />
            </div>
            <div className="form-group">
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="medium"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>
            </div>
        </form>
    )
}