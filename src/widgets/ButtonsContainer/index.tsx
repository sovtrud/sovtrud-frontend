import style from "./styles.module.scss";
import ButtonWithText from "@/shared/ui/buttons/ButtonWithText";
import { buttonSizes } from "@/app/constants/buttonSizes";

export default function ButtonsContainer() {
  return (
    <div className={style.buttons}>
      <ButtonWithText //s
        type="accent"
        size={buttonSizes.s}
      >
        Далее
      </ButtonWithText>
      <ButtonWithText //m
        type="accent"
        size={buttonSizes.m}
      >
        Далее
      </ButtonWithText>
      <ButtonWithText //l
        type="accent"
        size={buttonSizes.l}
      >
        Далее
      </ButtonWithText>
      <ButtonWithText //xl
        type="accent"
        size={buttonSizes.xl}
      >
        Далее
      </ButtonWithText>

      <ButtonWithText //s
        type="primary"
        size={buttonSizes.s}
      >
        Далее
      </ButtonWithText>
      <ButtonWithText //m
        type="primary"
        size={buttonSizes.m}
      >
        Далее
      </ButtonWithText>
      <ButtonWithText //l
        type="primary"
        size={buttonSizes.l}
      >
        Далее
      </ButtonWithText>
      <ButtonWithText //xl
        type="primary"
        size={buttonSizes.xl}
      >
        Далее
      </ButtonWithText>
    </div>
  );
}
