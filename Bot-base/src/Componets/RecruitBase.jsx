import PropTypes from 'prop-types';
import React from 'react'

const RecruitBase = ({ourBots, onRemove}) => {
  return (
    <div>
      <h1>Your Bot Army</h1>
      <ul className='container grid grid-cols-3 gap-4'>
        {ourBots.map(item => (
          <li
          key={item.id}
          className="card border-2 border-slate-950 rounded-md bg-teal-700"
          onClick={() => onRemove(item)}
          >
            <img
              src={item.avatar_url}
              alt={item.name}
              className='border border-slate-950 rounded-md bg-slate-600'
            />
            <div>
              <h3>{item.name}</h3>
              <p>Health: {item.health}</p>
              <p>Damage: {item.damage}</p>
              <p>Armor: {item.armor}</p>
              <p>Class: {item.bot_class}</p>
              <p>Catchphrase: {item.catchphrase}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

RecruitBase.propTypes = {
    ourBots: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar_url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      health: PropTypes.number.isRequired,
      damage: PropTypes.number.isRequired,
      armor: PropTypes.number.isRequired,
      bot_class: PropTypes.string.isRequired,
      catchphrase: PropTypes.string.isRequired,
    })).isRequired,
    onRemove: PropTypes.func.isRequired,
  };

export default RecruitBase
