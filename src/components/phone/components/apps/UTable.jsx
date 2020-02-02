import React from 'react';
import MaterialTable from "material-table";

class UTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Погибшие сотрудники проекта DEDNET, вечная память',
      columns: [
        { title: 'Имя', field: 'name' },
        { title: 'Фамилия', field: 'surname', initialEditValue: 'initial edit value' },
        { title: 'Год рождения', field: 'birthYear' },
        {
          title: 'Место рождения',
          field: 'birthCity',
          lookup: { 34: 'Москва', 63: 'Санкт-Петербург' },
        },
      ],
      data: [
        { name: 'Ахмед', surname: 'Баран', birthYear: 1987, birthCity: 63 },
        { name: 'Мухаммед', surname: 'Баран', birthYear: 2017, birthCity: 34 },
      ],
      localization: {
        header: {
          actions: ' '
        },
        body: {
          emptyDataSourceMessage: 'Список пуст',
          editTooltip: 'Редактировать',
          deleteTooltip: 'Удалить',
          addTooltip: 'Добавить',
          filterRow: { filterTooltip: 'Фильтр' },
          editRow: {
            deleteText: 'Подтвердить удаление?',
            cancelTooltip: 'Отмена',
            saveTooltip: 'Сохранить'
          },
        },
        pagination: {
          labelDisplayedRows: '{from}-{to} из {count}',
          labelRowsSelect: 'строк(а)',
          labelRowsPerPage: 'Строк на странице:',
          firstAriaLabel: 'В начало.',
          firstTooltip: 'В начало',
          previousAriaLabel: 'Сюда',
          previousTooltip: 'Сюда',
          nextAriaLabel: 'Туда',
          nextTooltip: 'Туда',
          lastAriaLabel: 'В конец',
          lastTooltip: 'В конец'
        },
        toolbar: {
          addRemoveColumns: 'Добавить или удалить столбцы',
          nRowsSelected: '{0} строк(а) выбрано',
          showColumnsTitle: 'Показать столбцы',
          showColumnsAriaLabel: 'Показать столбцы',
          searchTooltip: 'Поиск',
          searchPlaceholder: 'Поиск'
        }
      },
      options: {
        actionsColumnIndex: -1,
        search: true,
        pageSize: 3,
        addRowPosition: 'first',
        maxBodyHeight: "50%",
        actionsCellStyle: {
        },
        headerStyle: {
          fontSize: "14px"
        },
        rowStyle: {
          fontSize: "12px"
        }
      }
    }
  }

  componentWillMount() {
    this.state.data.length <= 10 ?
      this.setState(prevState => ({ ...prevState.options.pageSize = this.state.data.length }))
      :
      this.setState(prevState => ({ ...prevState.options.pageSize = 10 }))
  }
  componentDidUpdate(prevProp, prevState) {
    console.log(this.state.data.length)
    console.log(prevState.data.length)
    if (this.state.data.length !== prevState.data.length) {
      this.state.data.length <= 10 ?
        this.setState(prevState => ({ ...prevState.options.pageSize = this.state.data.length }))
        :
        this.setState(prevState => ({ ...prevState.options.pageSize = 10 }))
    }
  }

  render() {
    return (
      <MaterialTable style={{ width: '99%', align: 'center', whiteSpace: 'nowrap' }}
        title={this.state.title}
        columns={this.state.columns}
        data={this.state.data}
        options={this.state.options}
        localization={this.state.localization}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                this.setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  this.setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                this.setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
    )
  }
}
export default UTable;
