import classNames from "classnames";
import "@styles/components/ui/Card.scss";

export interface CardProps {
  className?: string;
  variant?: "default" | "elevated" | "outlined";
  padding?: "small" | "medium" | "large";
  clickable?: boolean;
  title?: string;
  headerActions?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  className = "",
  variant = "default",
  padding = "medium",
  clickable = false,
  title,
  headerActions,
  footer,
  children,
}) => {
  const cardClass = classNames(
    "card",
    variant,
    `padding-${padding}`,
    {
      clickable,
    },
    className
  );

  return (
    <div className={cardClass} data-testid="card">
      {(title || headerActions) && (
        <div className="card-header">
          {title && <h3 className="card-title">{title}</h3>}
          {headerActions && <div className="card-actions">{headerActions}</div>}
        </div>
      )}
      <div className="card-content">{children}</div>
      {footer && <div className="card-footer-container">{footer}</div>}
    </div>
  );
};

export default Card;
