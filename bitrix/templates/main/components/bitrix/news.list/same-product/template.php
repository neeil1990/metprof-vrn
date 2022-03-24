<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
if($arResult["ITEMS"]):
?>
<div class="h2"><?=$arParams['PAGER_TITLE']?></div>
<div class="slider_product_show_all slider_product" id="mp__product__action">

	<?foreach($arResult["ITEMS"] as $arItem):?>
	<div>
		<div class="product">
			<a href="<?=$arItem["DETAIL_PAGE_URL"]?>" style="display: block;height: 120px">
				<img src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" alt="<?=$arItem["NAME"]?>" style="max-height: 110px;margin: 0 auto;" class="img">
			</a>
			<a href="<?=$arItem["DETAIL_PAGE_URL"]?>" class="name"><?=$arItem["NAME"]?></a>
			<div class="price">
				<?if(priceDiscount($arItem['ID'])){?>
					<span><?=priceDiscount($arItem['ID']);?></span> <?=RUB?>/<?=$arItem['PROPERTIES']['CML2_BASE_UNIT']['VALUE'];?>
				<?}else{?>
					<span><?=price($arItem['ID']);?></span> <?=RUB?>/<?=$arItem['PROPERTIES']['CML2_BASE_UNIT']['VALUE'];?>
				<?}?>
			</div>

			<?if($arItem['PROPERTIES']['DLINA_TEST']['VALUE']):?>
				<a href="<?=$arItem["DETAIL_PAGE_URL"]?>" class="cart">Купить</a>
			<?else:?>
				<a href="javascript:void(0);" onclick="addToBasket2(<?=$arItem['OFFERS']['ID']?>, 1,this,<?=$arItem['PROPERTIES']['CML2_BASE_UNIT']['DESCRIPTION']?>);" class="cart">Купить</a>
			<?endif;?>
		</div>
	</div>
	<? endforeach; ?>


</div><!-- end::slider_product -->
<? endif; ?>
