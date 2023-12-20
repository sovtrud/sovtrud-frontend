import style from "./styles.module.scss";
import { SvgSize } from "@/shared/ui/icons/IconWithSvg";
import { buttonSize } from "@/app/constants/buttonSizes";
import ButtonWithText from "@/shared/ui/buttons/ButtonWithText";
import Button from "@/shared/ui/buttons/Button";
import LinkButton from "@/shared/ui/buttons/LinkButton";
import IconWithSvg from "@/shared/ui/icons/IconWithSvg";
import SegmentedButton from "@/shared/ui/SegmentedButton";

// icons
import ArrowRight from "@/assets/icons/right.svg?react";
import DeleteForever from "@/assets/icons/delete-forever.svg?react";
import Artboard from "@/assets/icons/artboard.svg?react";
import PlusCircle from "@/assets/icons/plus_circle.svg?react";
import Edit from "@/assets/icons/edit.svg?react";
import Close from "@/assets/icons/close.svg?react";
import Check from "@/assets/icons/check.svg?react";
import Calendar from "@/assets/icons/calendar.svg?react";
import PlusSquare from "@/assets/icons/plus_square.svg?react";
import Plus from "@/assets/icons/plus.svg?react";

export default function ButtonsContainer() {
  return (
    <div className={style.buttons}>
      <SegmentedButton />
      <Button className="button_type_plus-square">
        <IconWithSvg
          children={PlusSquare}
          status="active"
          size={SvgSize.BASE24}
        />
      </Button>
      <Button>
        <IconWithSvg
          children={Artboard}
          status="active"
          size={SvgSize.BASE16}
        />
      </Button>
      <Button>
        <IconWithSvg
          children={Calendar}
          status="active"
          size={SvgSize.BASE16}
        />
      </Button>
      <Button>
        <IconWithSvg children={Check} status="active" size={SvgSize.BASE16} />
      </Button>
      <Button>
        <IconWithSvg children={Close} status="active" size={SvgSize.BASE16} />
      </Button>
      <Button changeStroke>
        <IconWithSvg children={Edit} status="active" size={SvgSize.BASE16} />
      </Button>
      <Button>
        <IconWithSvg
          children={PlusCircle}
          status="active"
          size={SvgSize.BASE24}
        />
      </Button>
      <Button>
        <IconWithSvg
          children={DeleteForever}
          status="active"
          size={SvgSize.BASE24}
        />
      </Button>
      <LinkButton>Ок</LinkButton>
      <ButtonWithText
        type="accent"
        size={buttonSize.TASK}
        icon={
          <IconWithSvg
            children={ArrowRight}
            status="active"
            size={SvgSize.BASE24}
          />
        }
      >
        Добавить задачу
      </ButtonWithText>
      <LinkButton
        icon={
          <IconWithSvg children={Plus} status="active" size={SvgSize.BASE16} />
        }
      >
        Добавить еще задачу
      </LinkButton>
      <ButtonWithText //s
        type="accent"
        size={buttonSize.S}
      >
        Далее
      </ButtonWithText>
      <ButtonWithText //m
        type="accent"
        size={buttonSize.M}
      >
        Далее
      </ButtonWithText>
      <ButtonWithText //l
        type="accent"
        size={buttonSize.L}
      >
        Далее
      </ButtonWithText>
      <ButtonWithText //xl
        type="accent"
        size={buttonSize.XL}
      >
        Далее
      </ButtonWithText>

      <ButtonWithText //s
        type="primary"
        size={buttonSize.S}
      >
        Далее
      </ButtonWithText>
      <ButtonWithText //m
        type="primary"
        size={buttonSize.M}
      >
        Далее
      </ButtonWithText>
      <ButtonWithText //l
        type="primary"
        size={buttonSize.L}
      >
        Далее
      </ButtonWithText>
      <ButtonWithText //xl
        type="primary"
        size={buttonSize.XL}
      >
        Далее
      </ButtonWithText>
    </div>
  );
}
