/**
 * Created by mayomi on 2/6/19 by 5:57 PM.
 */
$(function(){
	$("form").submit(function(e){
		e.preventDefault();
		const selectedSymptoms = parseInt($("#checkSymptom").val());
		let diseaseDetails;
		switch (selectedSymptoms) {
			case 1:
				diseaseDetails = `
        	<div class="chat-agbegbemi">
          <div class="row">
            <div class="col-md-3 d-flex">
              <div class="chat-avatar-circle"><i class="fas fa-user-md chat-avatar"></i></div>
              <div class="p-2">Agbegbemi</div>
            </div>
            <div class="col-md-9 chat-agbegbemi-box">
              <h4>DISEASE</h4>
              <h5>Black Pod</h5>
              <hr>

              There are several methods available in order to control black pod disease such as cultural,
              chemical and biological control. In addition, the cultivation of varieties that resistant
              to black pod is an alternative in order to reduce disease incidence.
              <br><br>
              <h5>Cultural control</h5>
              Several cultural practices to manage black pod disease could be implemented in cocoa plantation.
              A spacing of 3.1 x 3.1m and pruning of trees are recommended for cocoa planting in order to allow
              more light and air flow around the trees. This will reduce the level of humidity that is causing
              black pod disease. The removal of pods with black pod symptom should also be done in favor to
              eliminate the source of inoculum. In another study, the utilization of litter mulch under cocoa
              plantation has been reported in Papua New Guinea, which has some negative effect on the population
              of P. palmivora, and therefore could reduce the pod infection especially at the beginning of raining
              season. Leaf litter showed rapid decline in pathogen recovery of colonized cocoa tissue after 18 weeks,
              relative to grass ground cover. An explanation for this is due to higher moisture content and
              microbial activity of other microbes under leaf litter that reduces the survival of Phytophthora cinnamomi
              as documented by Aryantha et al. (2000). More frequent ripe pod harvest (i.e. twice a week) and
              removal of infected pod on the ground was demonstrated to significantly reduced disease occurrence
              and improve pod yield compared to less frequent harvest and removal (i.e. once a month).
              In addition, scattered healthy pod on the ground should also be removed, as it will be infected
              and become the source of inoculum later. Sanitation is one cultural method to control for black pod disease.
              Sanitation practices include weed removal, pruning, thinning and removal of infected and mummified pods
              every two weeks in order to eliminate the source for inoculum. Phytosanitary pod removal was
              observed to significantly reduce disease occurrences by 9–11% to 22–31%, where this practice removes
              the source for secondary inoculum. However, increase in disease incidence after raining season was
              observed to be most likely due to the spread of inoculum from survival site by the rain.
              The application of fungicide following sanitation is commonly performed for an effective control of disease,
              as sanitation practice alone would not completely eliminate the source of inoculum and still causes
              greater black pod incident compared to sanitation followed by at least one fungicide application
              <br><br>
              <h5>Chemical control</h5>
              The application of copper fungicide has been shown to significantly reduce a great number of black pod
              incidences in Nigeria. Metalaxyl (Ridomil) and cuprous oxide (Perenox) were identified to be successful
              in increasing the number of harvested healthy pod compared to the application of fosetyl aluminium (Aliete)
              and control treatment. On top of that, the timing of fungicide application has some positive effect on the
              final pod yield where this plot produced greater yield than the unsprayed plot.
              The application was done before August, which is before the main disease epidemic that
              usually occurs in September and October. The recommended standard for fungicide application to control
              black pod disease caused by P. megakarya for a season is 6 to 8 times of application in every 3–4 weeks.
              However, the adoption of recommended application was very low among farmers in Ghana. Therefore, an experiment
              with a reduced number of fungicide applications demonstrated that there was 25 to 45% reduction in disease
              incidence. In terms of disease control and yields, sanitation and three applications of Ridomil 72 plus
              (12% metalaxyl + 60% copper-1-oxide) fungicide showed a better control compared to sanitation alone and
              sanitation with one or two fungicide applications. However, reduced in fungicide application was shown to
              be significantly less effective than the recommended standard fungicide application. It was suggested that the
              understanding regarding the source of inoculum, the amount of infective inoculum production and how the disease
              is disseminated is important in order to identify the appropriate and economical method in fungicide application
              as well as for an effective control of the disease. For example, the application of fungicide on the trunk
              will help farmers to control the spread of the disease up in the canopy, as it is difficult to reach the
              canopy during fungicide application. This will eventually save more time, labor and cost for disease
              management.
              <br><br>
              <h5>Cultural and chemical control</h5>
              In Ghana, a study that combined the sanitation and fungicide application showed a significant reduction in the
              percentage of disease incidence, where greater black pod incident were observed from pods on the trunk than the
              canopy in control treatment (no fungicide application). This suggested that the application of fungicide on the
              trunk would protect pods from infection, therefore reduce primary and secondary infection rate, both on the
              trunk and in the canopy. In addition, the application of systemic (potassium phosphonate) with one and double
              injection (20 ml and 40 ml of fungicide for each injection frequency), and semi-systemic (metalaxyl) fungicide
              showed better control compared to contact fungicides (copper based fungicide) in both locations that were used
              in the experiment.
              <br><br>
              <h5>Biological control</h5>
              Heavy application of chemical fungicide would eventually leads to resistant of pathogen and causing soil and water
              pollutions. Hence, more sustainable and environmental friendly method should be established and implemented, such
              as biological control. Several species of fungi from the genera of Trichoderma was identified to be a beneficial
              endophyte, to control black pod caused by Phytophthora spp. An isolate of Trichoderma asperellum from soil was
              observed as a potential mycoparasite for P. megakarya where this fungus has the potential to reduce black pod
              incident under field condition in Cameroon. It was reported that moderate black pod cases (47%) occurred in the
              T. asperellum treatment to control black pod disease compared to trees with untreated (71%) and chemical fungicide
              (1.73%). Another species, which is T. virens also has been documented to reduce some black pod incident in Peru.
              In Brazil, a new species known as Trichoderma martiale Samuels, sp. nov. was identified as an endophyte on cocoa,
              which has the ability to reduce black pod symptoms caused by P. megakarya. This endophyte species survives on cocoa
              pods, and has the ability to establish a long endophytic association with the host (about 3.5 months).
              Nevertheless, the protection against black pod via biological control is not as effective as the control
              using chemical fungicides

              <br><br>
              <h5>Resistant variety</h5>
              There is no specific variety of cocoa that shows resistant to Phytophthora infections and the establishment and
              utilization of resistant variety will be most likely depends on the region. Numerous breeding programs have been
              established worldwide in order to screen and test for local hybrids for disease resistant of Phytophthora spp.
              For example, a study in Cameroon assessed the performance of local cocoa cultivars (the southern and northern
              Cameroon cultivar) compared to the local and international gene bank cultivars. The local genebank cultivar
              consisted of F1 hybrid of Upper Amazon X Trinidad, and an international cultivar from Papua New Guinea, and
              Latin America were provided through International Cocoa Genebank, Trinidad. Based on the information provided by
              farmers and leaf disc test to assess resistant variety, the local cultivars selected from farmers field showed some
              resistant to P. megakarya compared to other varieties. Thus, it was concluded that there are some potential resistant
              varieties available in this area. In addition, some molecular work on developing resistant varieties to black pod is
              being done by CEPLAC (Executive Plan of Cocoa Farming) agency in Brazil and hopefully more breeding program
              focusing on black pod resistant will be established and produced commercialized resistant varieties.

            </div>
          </div>
        </div>
        	`;
				break;
			case 2:
				diseaseDetails = `
        	<div class="chat-agbegbemi">
          <div class="row">
            <div class="col-md-3 d-flex">
              <div class="chat-avatar-circle"><i class="fas fa-user-md chat-avatar"></i></div>
              <div class="p-2">Agbegbemi</div>
            </div>
            <div class="col-md-9 chat-agbegbemi-box">
              <h4>DISEASE</h4>
              <h5>Witches' Broom</h5>
              <hr>

              <h5>History, distribution and impact</h5>
              Moniliophthora perniciosa is a fungus responsible for Witches' Broom disease. During the last century the fungus spread throughout all of South America, Panama and the Caribbean, causing great losses in production. The most visible effect can be seen in Brazil where the introduction of the disease in the
              region of Bahia caused a decrease in production of almost 70% during a period of 10 years.

              <br><br>
              <h5>Disease symptoms</h5>
              The fungus attacks only actively growing tissue (shoots, flowers and pods) causing cocoa trees to produce branches with no fruit and ineffective leaves.
              The pods show distortion and present green patches that give the appearance of uneven ripening.
              <br><br>
              <h5>Epidemiology</h5>
              The life cycle of the fungus is synchronized with the phenology of the host. One of the most influential factors for the adequate reproduction of the fungus is water. Basidiospores are released at night and are related to the level of humidity (=80%) and favourable temperature (20-30ºC). The spores are capable of being disseminated
              locally by water and convection currents and over long distances by wind.
              <br><br>
              <h5>Quarantine</h5>
              Basidiospores have a short viability period and are sensitive to light and drying but are produced in vast numbers (each basidiocarp can produce 2-3.5 million spores). Humans are considered the crucial factor in long-distance dissemination.
              The pathogen is also spread in infected seeds or budwood.
              <br><br>
              <h5>Disease resistance</h5>
              Host resistance is recommended as the best option for economic and sustainable control. During the 1930s, selections were identified showing resistance in Trinidad. As a result, Trinidad Selected Hybrids were developed and widely planted during the 1950s. However, more aggressive strains of the pathogen in other countries made these selections ineffective. CEPLAC (Brazil) is currently working on new molecular techniques such as genetic
              linkage maps and quantitative trait loci to develop new resistant varieties.
              <br><br>
              <h5>Fungicides</h5>
              Various fungicides have been tested showing various results. New compounds and chemicals,
              which activate the host plant's defences, may offer a more effective and economical control.
              <br><br>
              <h5>Cultural practices</h5>
              Phytosanitary pruning is the only effective means of control of Witches' Broom. Complete removal of all infected material is advocated,
              but it is an impossible task because hidden inoculum sources always remain.
              <br><br>
              <h5>Prospects</h5>
              The new techniques developed in the project financed by ICCO/CFC in cooperation with international institutions identified individuals with accumulated genes leading to reliable resistance to the disease. The information evaluated during
              the project was more precise and scientists were able to produce more resistant varieties than expected at the beginning of the project. The first impact of the project outcome can be seen in Brazil, where the cocoa industry has re-gained confidence and production has been increased significantly

              <br><br>

            </div>
          </div>
        </div>
        	`;
				break;
			case 3:
				diseaseDetails = `
        	<div class="chat-agbegbemi">
          <div class="row">
            <div class="col-md-3 d-flex">
              <div class="chat-avatar-circle"><i class="fas fa-user-md chat-avatar"></i></div>
              <div class="p-2">Agbegbemi</div>
            </div>
            <div class="col-md-9 chat-agbegbemi-box">
              <h4>DISEASE</h4>
              <h5>Frosty pod Rot</h5>
              <hr>

              <h5>History, distribution and impact</h5>
              Frosty Pod Rot is caused by the basidiomycete Moniliophthora roreri. It is found in all north-western countries in South America. First reports of the disease date back to the end of the 19th century, where its aggressive effects caused devastation in Colombian and Ecuadorian cocoa plantations. The fungus has now spread all over the Latin American region,
              causing significant losses in production, even resulting in the abandonment of cocoa farms.

              <br><br>
              <h5>Disease symptoms</h5>
              The fungus infects only actively growing pod tissues, especially young pods. The time from infection to the appearance of symptoms is about 1-3 months.
              The most outstanding symptom is the white fungal mat on the pod surface.
              <br><br>
              <h5>Epidemiology</h5>
              The large amount of spores produced (44 million spores per cm2) and the genetic variability endows the fungus with considerable adaptability. The dry, powdery form of spores allows the fungus to be dislodged by water, wind or physical disturbance of the pod.
               Disease incidence varies with cultivar, pod age and rainfall. Generally the greatest production is when rainfall is high.
              <br><br>

              <h5>Quarantine</h5>
              Since spores are the only means of infection, all materials used must go through intermediate quarantine facilities.
               Application of fungicides is required when using seeds for reproduction as well as when treating budwood.
              <br><br>

              <h5>Disease resistance</h5>
              All cocoa species seem to be susceptible to this disease. Some varieties have shown a degree of resistance and field screening has identified clones with low disease severity and incidence.
               Genotypes which produce their pods during the dry season (unfavourable for the pathogen) escape the disease.
              <br><br>
              <h5>Fungicides</h5>
             The use of copper and organic protectors has proved to reduce the incidence of the disease. Systematic fungicides such as Flutolanil have been found effective,
              although the use of agrochemicals is not economically sustainable in view of the low prices of cocoa.
              <br><br>

            </div>
          </div>
        </div>
        	`;
				break;

			case 4:
				diseaseDetails = `
        	<div class="chat-agbegbemi">
          <div class="row">
            <div class="col-md-3 d-flex">
              <div class="chat-avatar-circle"><i class="fas fa-user-md chat-avatar"></i></div>
              <div class="p-2">Agbegbemi</div>
            </div>
            <div class="col-md-9 chat-agbegbemi-box">
              <h4>DISEASE</h4>
              <h5>Phytophthora pod rot</h5>
              <hr>

              <h5>History, distribution and impact</h5>
              Pod Rot, also know as Black Pod, is caused by the fungus Phytophthora spp. Three fungal species of the same genus are responsible - P. palmivora, P. megakarya and P. capsici. The P. palmivora causes global yield loss of 20-30% and tree deaths of 10% annually. P. megakarya is the most important pathogen in Central and West Africa,
              known as the most aggressive of the Pod Rot pathogens. P. capsici is widespread in Central and South America, causing significant losses in favourable environments.

              <br><br>
              <h5>Disease symptoms</h5>
              Obvious symptoms are the rotting or necrosis of pods. Pods can be attacked at any stage of development, and the initial symptoms are small, hard,
              dark spots on any part of the pod. Internal tissues, including the beans, are colonized and shrivel to form a mummified pod.
              <br><br>

              <h5>Epidemiology</h5>
              Under humid conditions a single mummified pod infected with P. palmivora can produce up to 4 million sporangia
              which can be disseminated by rain, ants, flying insects, rodents, bats and contaminated pruning material.
              In the case of P. megakarya, sporulation is usually more abundant. The soil borne phase of the
               P. megakarya disease cycle causes root infection maintaining a reservoir of inoculum that releases
               zoospores into the soil surface water. P. megakarya does not survive in mummified pods
              but can survive in infected debris for at least 18 months, while P. palmivora survives less than
              10 months in the soil.
              <br><br>

              <h5>Quarantine</h5>
              Efforts are being held to prevent the movement of P. megakarya from West Africa to other cocoa growing regions.
               Cocoa germplasm should go through intermediate quarantine facilities when multi-breeding projects are developed.
              <br><br>

              <h5>Disease resistance</h5>
              Breeding for resistance offers the best long-term management strategy. Reliable screens for resistance are been
              developed and DNA markers could aid breeding programmes. Another approach
              is to seek out healthy individual trees among the great diversity of genotypes on farms under high natural disease pressure.
              <br><br>
              <h5>Fungicides</h5>
             Protectant sprays of copper based fungicides, combined with the systematic fungicide metalaxyl under high disease pressure, at three or four weekly intervals are frequently recommended. Some controls involving the injection of the trunk with cheap inorganic salt
              and potassium phosphonate have proven to be effective against P. palmivora in some producing regions.
              <br><br>

              <h5>Cultural practices</h5>
              Modification of farm management practices to optimize shade and aeration through appropriate spacing and pruning to reduce surface wetness should be effective. Frequent and complete harvesting, sanitation and appropriate disposal
               of pod mummies, infected pods and pod husks can reduce the disease.

            </div>
          </div>
        </div>`;
				break;

			case 5:
				diseaseDetails = `
        	<div class="chat-agbegbemi">
          <div class="row">
            <div class="col-md-3 d-flex">
              <div class="chat-avatar-circle"><i class="fas fa-user-md chat-avatar"></i></div>
              <div class="p-2">Agbegbemi</div>
            </div>
            <div class="col-md-9 chat-agbegbemi-box">
              <h4>DISEASE</h4>
              <h5>Vascular-streak dieback (VSD)</h5>
              <hr>

              <h5>History, distribution and impact</h5>
              This disease is caused by the fungus known as Oncobasidium theobroma. It was first distinguished in the 1960s in Papua New Guinea when it caused heavy losses of trees in mature plantations. The
              disease has spread ever since and is found in South East Asia, causing major losses in large commercial plantations in Malaysia.

              <br><br>
              <h5>Disease symptoms</h5>
              The initial characteristic symptoms are the chlorosis of one leaf on the second or third flush behind the tip.
               The fungus may spread internally to other branches or the trunk, usually causing death of the tree.
                When an infected leaf falls during the rainy season, hyphea may emerge from the leaf scar and develop into a basidiocarp,
               evident as a white, flat, velvety coating over the leaf scar and adjacent bark.
              <br><br>
              <h5>Epidemiology</h5>
              The formation and forcible discharge of basidiospores occurs mainly at night.
              The spores are dispersed by wind although effective spore dispersal is limited by high humidity.
              The basidiocarps only develop when leaf fall occurs during wet weather.
              They have a short life-span and release spores only at night and when the basidiocarps are sufficiently moist.
              <br><br>

              <h5>Quarantine</h5>
              Quarantine measures to restrict transport of the fungus by humans are crucial
             in reducing inter-regional spread of the disease.
               Transmission of the disease through fermented and dried seeds has not been demonstrated.
              <br><br>

              <h5>Disease resistance</h5>
              Selection for a degree of resistance to the disease of survivor plants from Papua New Guinea has been
               identified and used for propagation. The use of resistant material brought from various regions produces
               resistant hybrids that are been distributed in Papua New Guinea. Resistant types still become infected but
               at lower levels and the pathogen grows more slowly.
              The resistance has been sustained and lasted from 1963 to the present time.
              <br><br>
              <h5>Fungicides</h5>
             Protective fungicides are unlikely to be effective against this disease since infection occurs
              mainly during the wet season and thus the product is washed away. The systematic fungicide
              propiconazole painted on the stems of young seedlings or applied as a spray was effective in nursery conditions.
              <br><br>
              <h5>Cultural Practices</h5>
              Pruning diseased material about 30cm below the discoloured xylem prevents further expansion of
              infection and reduces inoculum levels. Opening the canopy and control of shading to increase aeration
               and insolation of the foliage are important. The raising of planting material under plastic cover and away
               from infected plantations ensures that the material used for reproduction will be disease-free.
            </div>
          </div>
        </div>`;
				break;

			default:
				diseaseDetails = `
        	No disease selected.
        	`
		}


		$("#chat-answerId").html(diseaseDetails);
	});
});
