/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import React from 'react'

const BotsCollection = ({army, handleClick}) => {
  return (
    <div>
      <h1>Bots Collection.</h1>
      <div>
        <h1 className='text-5xl font-bold text-center italic font-mono'>BOTS-COLLECTION</h1>
        <ul className='container grid grid-cols-3 gap-4'>
          {army.map(item => (
              <li
                key={item.id}
                className="card border-2 border-slate-950 rounded-md bg-teal-700"
                onClick={() => handleClick(item)}>
                <img
                    src={item.avatar_url}
                    alt={item.name}
                    className='border border-slate-950 rounded-md bg-slate-600'
                    id={item.id}
                />
                <div className='content'>
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
    </div>
  )
}



BotsCollection.propTypes = {
  army: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  handleClick: PropTypes.func.isRequired
}

export default BotsCollection
