import React from 'react'
import { PanelView, UnitView } from '..'
import style from './style.sass'
import game from '../../game.js'

class UnitListView extends React.Component {

  render () {
    const unitViews = Object.keys(game.info).map((key, i) => {
      return <UnitView
        {...game.info[key]}
        unit={key}
        key={i}
      />
    })
    return <PanelView title='Units' className={style.unitList}>
      <table cellSpacing='0'>
        <tbody>
          {unitViews}
        </tbody>
      </table>
    </PanelView>
  }
}

export default UnitListView
