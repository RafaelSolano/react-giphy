/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import AddCAtegory from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {
  test('Debe de cambiar el valor de la caja de texto', () => {
    render(<AddCAtegory onNewCategory={() => {}} />);
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: 'saitama' } });
    expect(input.value).toBe('saitama');
  });

  test('should debe llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'saitama';
    const onNewCategory = jest.fn();

    render(<AddCAtegory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('no debe llamar el onNewCategory si el input esta vacio', () => {

    const onNewCategory = jest.fn();

    render(<AddCAtegory onNewCategory={onNewCategory} />);
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    expect(onNewCategory).not.toHaveBeenCalled();

    
  });
  
});
