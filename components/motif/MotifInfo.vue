<template>
  <v-hover v-slot:default="{ hover }" open-delay="0">
    <v-card
      class="mx-auto pa-2"
      max-width="400"
      tile
      :elevation="hover ? 6 : 2"
      :class="{ 'on-hover': hover }"
    >
      <v-card-text>
        <p
          v-if="motif.motif_type == 'SHAPE'"
          class="subtitle-1 text--primary ma-0"
        >
          Group: HelT
        </p>
        <p class="subtitle-1 text--primary ma-0">
          Motif ID: {{ motif.base_id }}
        </p>
        <v-img
          v-if="motif.motif_type == 'SEQUENCE'"
          src="/img/motif_logo/DE00000101.png"
        />
        <v-img v-else src="/img/motif_logo/shapelogo1.png" />

        <p class="text--primary ma-0">
          Collection:
          {{ motif.collection.toLowerCase() }} motif
        </p>
        <div v-if="motif.motif_type == 'SEQUENCE'">
          <p class="text--primary ma-0">Class: {{ motif.tf_class }}</p>
          <p class="text--primary ma-0">Family: {{ motif.tf_family }}</p>

          <v-divider></v-divider>
          <p class="text--primary ma-0">
            TF name in JASPAR:
            <span class="font-weight-bold">
              <a
                href="http://jaspar.genereg.net/matrix/MA0080.1/"
                target="_blank"
                style="text-decoration:none;"
              >
                {{ motif.tf_name_jaspar }}</a
              >
            </span>
          </p>
          <p class="text--primary ma-0">
            TF name in HOCOMOCO:
            <span class="font-weight-bold"
              ><a
                href="http://jaspar.genereg.net/matrix/MA0080.1/"
                target="_blank"
                style="text-decoration:none;"
                >{{ motif.tf_name_hocomoco }}</a
              ></span
            >
          </p>
          <p class="text--primary ma-0">
            TF name in Transfac:
            <span class="font-weight-bold"
              ><a
                href="http://jaspar.genereg.net/matrix/MA0080.1/"
                target="_blank"
                style="text-decoration:none;"
                >{{ motif.tf_name_transfac }}</a
              ></span
            >
          </p>
        </div>
      </v-card-text>
      <v-card-actions>
        <nuxt-link
          :to="'/detail/' + motif.base_id"
          style="text-decoration:none;"
        >
          <v-btn color="secondary" text>
            Explore details
          </v-btn>
        </nuxt-link>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'MotifInfo',
  props: {
    motif: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
