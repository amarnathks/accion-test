export default function ({ children: card, dragging, allowRemoveCard, onCardRemove }) {
  return (
    <div className={`react-accion-test-card ${dragging ? 'react-accion-test-card--dragging' : ''}`}>
      <span>
        <div className='react-accion-test-card__title'>
          <span>{card.title}</span>
          {allowRemoveCard && (
            <span style={{ cursor: 'pointer' }} onClick={() => onCardRemove(card)}>
              ×
            </span>
          )}
        </div>
      </span>
      <div className='react-accion-test-card__description'>{card.description}</div>
    </div>
  )
}
