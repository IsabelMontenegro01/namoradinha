/**
 * Botões de "voltar" e "continuar" usados no rodapé de cada capítulo.
 * Passe onBack como null/undefined para esconder o botão de voltar
 * (usado na tela inicial, por exemplo).
 */
export default function Navigation({ onBack, onContinue, continueLabel }) {
  return (
    <div className="nav-buttons">
      {onBack ? (
        <button className="btn btn-ghost" onClick={onBack}>
          ← voltar
        </button>
      ) : (
        <span />
      )}
      {onContinue && (
        <button className="btn btn-primary" onClick={onContinue}>
          {continueLabel}
        </button>
      )}
    </div>
  )
}
