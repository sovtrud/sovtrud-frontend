import style from "./styles.module.scss";
import ButtonWithText from "@/shared/ui/buttons/ButtonWithText";

export default function ButtonsContainer() {
  return (
    <div className={style.buttons}>
      <ButtonWithText //s
        type="accent"
        size="s"
      >
        Далее
      </ButtonWithText>
      <ButtonWithText //m
        type="accent"
        size="m"
      >
        Далее
      </ButtonWithText>
      <ButtonWithText //l
        type="accent"
        size="l"
      >
        Далее
      </ButtonWithText>
      <ButtonWithText //xl
        type="accent"
        size="xl"
      >
        Далее
      </ButtonWithText>

      <ButtonWithText //s
        type="primary"
        size="s"
      >
        Далее
      </ButtonWithText>
      <ButtonWithText //m
        type="primary"
        size="m"
      >
        Далее
      </ButtonWithText>
      <ButtonWithText //l
        type="primary"
        size="l"
      >
        Далее
      </ButtonWithText>
      <ButtonWithText //xl
        type="primary"
        size="xl"
      >
        Далее
      </ButtonWithText>
    </div>
  );
}
