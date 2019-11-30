import React from 'react';
import Camera from './content/Camera';
import FamilyCharacter from './content/FamilyCharacter';
import EditorCharacter from './content/EditorCharacter';
import {Route, Switch } from "react-router-dom";
import EventManager from "../../EventManager";
import NameCharacter from './content/NameCharacter';

class EditorPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      input_editor_face: [
        { name: 'Высота бровей', value: 0 },
        { name: 'Глубина бровей', value: 0 },
        { name: 'Высота скул', value: 0 },
        { name: 'Ширина скул', value: 0 },
        { name: 'Глубина щеки', value: 0 },
        { name: 'Ширина челюсти', value: 0 },
        { name: 'Высота подбородка', value: 0 },
        { name: 'Глубина подбородка', value: 0 },
        { name: 'Ширина подбородка', value: 0 },
        { name: 'Подбородочный отступ', value: 0 },
        { name: 'Обхват шеи', value: 0 },
      ],
      input_editor_nose: [
        { name: 'Ширина носа', value: 0 },
        { name: 'Высота носа', value: 0 },
        { name: 'Длина кончика носа', value: 0 },
        { name: 'Высота кончика носа', value: 0 },
        { name: 'Глубина моста носа', value: 0 },
        { name: 'Поломаность носа', value: 0 },
      ],

      input_editor_eyes_lips: [
        { name: 'Высота глаз', value: 0 },
        { name: 'Толщина губ', value: 0 },
      ],
      input_editor_face_last: [
        { title: "Волосы", maxVal: 37, index_help: 0 },
        { title: "Цвет волос", maxVal: 64, index_help: 0 },
        { title: "Брови", maxVal: 31, index_help: 0 },
        { title: "Цвет бровей", maxVal: 64, index_help: 0 },
        { title: "Цвет глаз", maxVal: 32, index_help: 0 },
        { title: "Веснушки", maxVal: 10, index_help: 0 },
        { title: "Цвет веснушек", maxVal: 10, index_help: 0 },
        { title: "Борода", maxVal: 10, index_help: 0 },
        { title: "Цвет бороды", maxVal: 10, index_help: 0 }
      ],
      cheked_sex: false,
      slider: [
        { title: "Мать", parents: ["Ханна", "Обри", "Жасмин", "Жизель", "Амелия", "Изабелла", "Зои", "Ава", "Камилла", "Вайолет", "София", "Эйлин", "Николь", "Эшли", "Грейс", "Брианна", "Натали", "Оливия", "Элизабет", "Кэтрин", "Эмма", "Мисти"], index_help: 0 },
        { title: "Отец", parents: ["Бенджамин", "Бенджамин", "Джоуи", "Ной", "Андре", "Джоан", "Алекс", "Исаак", "Эвон", "Итон", "Винсент", "Анжел", "Диего", "Адриан", "Габриель", "Майкл", "Сантьяго", "Кевин", "Луис", "Самюэль", "Энтони", "Клайд", "Нико", "Джон"], index_help: 0 },
        { title: "Сходство", index_help: 10 },
        { title: "Кожа", index_help: 10 }
      ],
      stats_parents: [[ //22
        { endurance: 10, strength: 20, shooting: 15, stealth: 20, flying: 10, driving: 10, psychics: 5 },
        { endurance: 20, strength: 10, shooting: 10, stealth: 10, flying: 25, driving: 35, psychics: 15 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
      ], [ //24
        { endurance: 5, strength: 15, shooting: 5, stealth: 35, flying: 10, driving: 20, psychics: 10 },
        { endurance: 25, strength: 5, shooting: 10, stealth: 5, flying: 10, driving: 35, psychics: 20 },
        { endurance: 10, strength: 20, shooting: 15, stealth: 20, flying: 10, driving: 10, psychics: 5 },
        { endurance: 20, strength: 10, shooting: 10, stealth: 10, flying: 25, driving: 35, psychics: 15 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
        { endurance: 45, strength: 25, shooting: 10, stealth: 15, flying: 10, driving: 25, psychics: 20 },
      ]],
      stats: { endurance: 0, strength: 0, shooting: 0, stealth: 0, flying: 0, driving: 0, psychics: 0 },

      first_name: '',
      last_name: '',
      old_input: '',
      slider_national: [
        {
          title: 'Выберите национальность',
          nationality: ["Русский", "Мексиканец", "Американец"],
          index_help: 0,
        }
      ],
    }
  }

  componentDidMount() {
    this.updateStatsFamilyCharacter();
  }
  resetEditorCharacter(i) {
    let copy;
    switch (i) {
      case 1:
        copy = this.state.input_editor_face;
        for (i = 0; i < copy.length; i++) {
          copy[i].value = 0
        }
        this.setState({ input_editor_face: copy })
        break;
      case 2:
        copy = this.state.input_editor_nose;
        for (i = 0; i < copy.length; i++) {
          copy[i].value = 0
        }
        this.setState({ input_editor_nose: copy })
        copy = this.state.input_editor_eyes_lips;
        for (i = 0; i < copy.length; i++) {
          copy[i].value = 0
        }
        this.setState({ input_editor_eyes_lips: copy })
        break;
      case 3:
        copy = this.state.input_editor_face_last;
        for (i = 0; i < copy.length; i++) {
          copy[i].index_help = 0
        }
        this.setState({ input_editor_face_last: copy })
        break;
      default: break;
    }
  }
  clickLeftArrowEditorCharacter(index) {
    let currentIndex = this.state.input_editor_face_last[index].index_help;
    if (currentIndex <= 0) {
      currentIndex = this.state.input_editor_face_last[index].maxVal;
    } else {
      currentIndex--;
    }
    this.setState(prev => ({ ...prev.input_editor_face_last[index].index_help = currentIndex }));
  }
  clickRightArrowEditorCharacter(index) {
    let currentIndex = this.state.input_editor_face_last[index].index_help;
    if (currentIndex >= this.state.input_editor_face_last[index].maxVal) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    this.setState(prev => ({ ...prev.input_editor_face_last[index].index_help = currentIndex }));
  }
  updateStatsFamilyCharacter() {
    let parents = this.state.stats_parents;
    let slider = this.state.slider;
    let new_stats = {
      endurance: parents[0][slider[0].index_help].endurance * ((slider[2].index_help * 5) / 100) * 2 + parents[1][slider[1].index_help].endurance * ((100 - slider[2].index_help * 5) / 100) * 2,
      strength: parents[0][slider[0].index_help].strength * ((slider[2].index_help * 5) / 100) * 2 + parents[1][slider[1].index_help].strength * ((100 - slider[2].index_help * 5) / 100) * 2,
      shooting: parents[0][slider[0].index_help].shooting * ((slider[2].index_help * 5) / 100) * 2 + parents[1][slider[1].index_help].shooting * ((100 - slider[2].index_help * 5) / 100) * 2,
      stealth: parents[0][slider[0].index_help].stealth * ((slider[2].index_help * 5) / 100) * 2 + parents[1][slider[1].index_help].stealth * ((100 - slider[2].index_help * 5) / 100) * 2,
      flying: parents[0][slider[0].index_help].flying * ((slider[2].index_help * 5) / 100) * 2 + parents[1][slider[1].index_help].flying * ((100 - slider[2].index_help * 5) / 100) * 2,
      driving: parents[0][slider[0].index_help].driving * ((slider[2].index_help * 5) / 100) * 2 + parents[1][slider[1].index_help].driving * ((100 - slider[2].index_help * 5) / 100) * 2,
      psychics: parents[0][slider[0].index_help].psychics * ((slider[2].index_help * 5) / 100) * 2 + parents[1][slider[1].index_help].psychics * ((100 - slider[2].index_help * 5) / 100) * 2
    }
    this.setState({
      stats: new_stats
    })
  }
  resetFamilyCharacter() {
    this.setState(prev => ({
      ...prev.slider[0].index_help = 0,
      ...prev.slider[1].index_help = 0,
      ...prev.slider[2].index_help = 10,
      ...prev.slider[3].index_help = 10,
    }, this.updateStatsFamilyCharacter()));
  }
  chekedSexFamilyCharacter() {
    this.setState({ cheked_sex: !this.state.cheked_sex })
  }
  clickLeftArrowFamilyCharacter(index) {
    let copy = this.state.slider;
    if (index > 1) {
      let currentIndex = copy[index].index_help;
      if (currentIndex <= 0) {
        currentIndex = 0;
      } else {
        currentIndex--;
      }
      copy[index].index_help = currentIndex;
      this.setState({ slider: copy }, this.updateStatsFamilyCharacter());
      return;
    }
    let array = copy[index].parents
    let currentIndex = copy[index].index_help;
    if (currentIndex === 0) {
      currentIndex = (array.length - 1);
    } else {
      currentIndex--;
    }
    copy[index].index_help = currentIndex;
    this.setState({ slider: copy }, this.updateStatsFamilyCharacter());
  }
  clickRightArrowFamilyCharacter(index) {
    let copy = this.state.slider;
    if (index > 1) {
      let currentIndex = copy[index].index_help;
      if (currentIndex >= 20) {
        currentIndex = 20;
      } else {
        currentIndex++;
      }
      copy[index].index_help = currentIndex;
      this.setState({ slider: copy }, this.updateStatsFamilyCharacter());
      return;
    }
    let array = copy[index].parents
    let currentIndex = copy[index].index_help;
    if (currentIndex === array.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    copy[index].index_help = currentIndex;
    this.setState({ slider: copy }, this.updateStatsFamilyCharacter());
  }
  valueFirstName(event) { this.setState({ first_name: event.target.value }) };
  valueLastName(event) { this.setState({ last_name: event.target.value }) };
  resetNameCharacter() {
    this.setState(prev => ({
      ...prev.slider_national[0].index_help = 0,

    }))
    this.setState({
      first_name: '',
      last_name: '',
      old_input: '',
    })
  }
  clickLeftArrowNameCharacter(index) {
    if (index > 1) {
      let currentIndex = this.state.slider_national[index].index_help;
      if (currentIndex <= 0) {
        currentIndex = 0;
      } else {
        currentIndex--;
      }
      this.setState(prev => ({ ...prev.slider_national[index].index_help = currentIndex }));
      return;
    }
    let array = this.state.slider_national[index].nationality
    let currentIndex = this.state.slider_national[index].index_help;
    if (currentIndex === 0) {
      currentIndex = (array.length - 1);
    } else {
      currentIndex--;
    }
    this.setState(prev => ({ ...prev.slider_national[index].index_help = currentIndex }));
  }
  clickRightArrowNameCharacter(index) {
    if (index > 1) {
      let currentIndex = this.state.slider_national[index].index_help;
      if (currentIndex >= 20) {
        currentIndex = 20;
      } else {
        currentIndex++;
      }
      this.setState(prev => ({ ...prev.slider_national[index].index_help = currentIndex }));
      return;
    }
    let array = this.state.slider_national[index].nationality
    let currentIndex = this.state.slider_national[index].index_help;
    if (currentIndex === array.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    this.setState(prev => ({ ...prev.slider_national[index].index_help = currentIndex }));
  }
  onCheckNumber(evt) {
    const financialGoal = (evt.target.validity.valid) ? evt.target.value : this.state.old_input;
    this.setState({ old_input: financialGoal });
  }
  saveCustomization() {
    // mp.trigger('client:user:auth:saveCustomization', параметры для передачи) // Сохранение кастомизации на сервер // eslint-disable-line
  }
  setCustomization() {
    // mp.trigger('client:user:auth:setCustomization', параметры для передачи) // Обновление кастомки на персонаже в реальном времени // eslint-disable-line
  }
  render() {
    return (
      <React.Fragment>
        <div className="editor-box">
          <Camera />
          <Switch>
            <Route path="/editor/name-character">
              <NameCharacter
                first_name={this.state.first_name}
                last_name={this.state.last_name}
                old_input={this.state.old_input}
                title={this.state.slider_national[0].title}
                index_help={this.state.slider_national[0].index_help}
                nationality={this.state.slider_national[0].nationality}
                valueFirstName={this.valueFirstName.bind(this)}
                valueLastName={this.valueLastName.bind(this)}
                onCheckNumber={this.onCheckNumber.bind(this)}
                clickLeftArrow={this.clickLeftArrowNameCharacter.bind(this)}
                clickRightArrow={this.clickRightArrowNameCharacter.bind(this)}
                reset={this.resetNameCharacter.bind(this)}            
              />
            </Route>
            <Route path="/editor/family-character">
              <FamilyCharacter
                chekedSex={this.chekedSexFamilyCharacter.bind(this)}
                clickLeftArrow={this.clickLeftArrowFamilyCharacter.bind(this)}
                clickRightArrow={this.clickRightArrowFamilyCharacter.bind(this)}
                reset={this.resetFamilyCharacter.bind(this)}

                slider_one={this.state.slider[0].index_help}
                title_one={this.state.slider[0].title}
                name_array_one={this.state.slider[0].parents}

                slider_two={this.state.slider[1].index_help}
                title_two={this.state.slider[1].title}
                name_array_two={this.state.slider[1].parents}

                slider_three={this.state.slider[2].index_help}
                title_three={this.state.slider[2].title}
                name_array_three={this.state.slider[2].index_help}

                slider_four={this.state.slider[3].index_help}
                title_four={this.state.slider[3].title}
                name_array_four={this.state.slider[3].index_help}

                endurance={this.state.stats.endurance}
                strength={this.state.stats.strength}
                shooting={this.state.stats.shooting}
                stealth={this.state.stats.stealth}
                flying={this.state.stats.flying}
                driving={this.state.stats.driving}
                psychics={this.state.stats.psychics}
              />
            </Route>
            <Route path="/editor/editor-character">
              <EditorCharacter
                  input_editor_face={this.state.input_editor_face}
                  reset={this.resetEditorCharacter.bind(this)}
                  input_editor_nose={this.state.input_editor_nose}
                  input_editor_eyes_lips={this.state.input_editor_eyes_lips}
                  input_editor_face_last={this.state.input_editor_face_last}
                  clickLeftArrow={this.clickLeftArrowEditorCharacter.bind(this)}
                  clickRightArrow={this.clickRightArrowEditorCharacter.bind(this)}
                  saveCustomization={this.saveCustomization.bind(this)}
              />
            </Route>
          </Switch>
        </div>
      </React.Fragment>
    )
  }
}
export default EditorPlayer;
