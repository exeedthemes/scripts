<style>
    .pscom {
        background: linear-gradient(45deg, #3c5b9a, #4f7bd6, #3c5b9a, #39b5e4, #3c5b9a, #39b5e4, #3c5b9a);
        background-size: 500% 500%;
        -webkit-animation: pscom 12s ease infinite;
        -moz-animation: pscom 12s ease infinite;
        animation: pscom 12s ease infinite;
    }

    @-webkit-keyframes pscom {
        0% {
            background-position: 0% 50%
        }

        50% {
            background-position: 100% 50%
        }

        100% {
            background-position: 0% 50%
        }
    }

    @-moz-keyframes pscom {
        0% {
            background-position: 0% 50%
        }

        50% {
            background-position: 100% 50%
        }

        100% {
            background-position: 0% 50%
        }
    }

    @keyframes pscom {
        0% {
            background-position: 0% 50%
        }

        50% {
            background-position: 100% 50%
        }

        100% {
            background-position: 0% 50%
        }
    }
</style>
<style>
    .penasharingDonasi {
        /* Warna Background */
        color: #ffffff;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        align-items: flex-start;
        flex-wrap: nowrap;
        justify-content: center;
        display: flex;
        padding: 15px;
        overflow: hidden;
        transition: all .3s ease;
        border-radius: 7px;
    }

    .penasharingDonasi .ikon a {
        background-color: #ffffff;
        /* Warna Ikon */
        color: #c10e0e;
        text-decoration: none;
        display: block;
        padding: 5px;
        border-radius: 7px;
        text-align: center;
        -webkit-animation: penasharingBounce 1s linear 1s infinite normal;
        animation: penasharingBounce 1s linear 1s infinite normal
    }

    .penasharingDonasi svg {
        width: 50px;
        height: 50px
    }

    .penasharingDonasi svg path {
        fill: #c10e0e
    }

    .penasharingDonasi .ikon {
        margin-right: 15px
    }

    .penasharingDonasi .deskripsi {
        line-height: 1.5em;
    }

    .penasharingDonasi .deskripsi .judul {
        font-size: 18px;
        font-weight: bold;
        display: block;
        margin-bottom: 10px;
    }

    @keyframes penasharingBounce {

        0%,
        100% {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1)
        }

        30% {
            -webkit-transform: scale3d(1.25, .75, 1);
            transform: scale3d(1.25, .75, 1)
        }

        40% {
            -webkit-transform: scale3d(.75, 1.25, 1);
            transform: scale3d(.75, 1.25, 1)
        }

        50% {
            -webkit-transform: scale3d(1.15, .85, 1);
            transform: scale3d(1.15, .85, 1)
        }

        65% {
            -webkit-transform: scale3d(.95, 1.05, 1);
            transform: scale3d(.95, 1.05, 1)
        }

        75% {
            -webkit-transform: scale3d(1.05, .95, 1);
            transform: scale3d(1.05, .95, 1)
        }
    }

    @-webkit-keyframes penasharingBounce {

        0%,
        100% {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1)
        }

        30% {
            -webkit-transform: scale3d(1.25, .75, 1);
            transform: scale3d(1.25, .75, 1)
        }

        40% {
            -webkit-transform: scale3d(.75, 1.25, 1);
            transform: scale3d(.75, 1.25, 1)
        }

        50% {
            -webkit-transform: scale3d(1.15, .85, 1);
            transform: scale3d(1.15, .85, 1)
        }

        65% {
            -webkit-transform: scale3d(.95, 1.05, 1);
            transform: scale3d(.95, 1.05, 1)
        }

        75% {
            -webkit-transform: scale3d(1.05, .95, 1);
            transform: scale3d(1.05, .95, 1)
        }
    }
</style>
<!-- Paypal Donation Box Bounce-->
<div class="penasharingDonasi pscom">
    <div class="ikon">
        <a href="https://www.paypal.com/donate/?hosted_button_id=M4U7NR833NZFJ" onclick="window.open(this.href,&quot;toolbar=0,status=0,width=800,height=600&quot;);return false;" title="Click To Donate">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewbox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
	<path style="fill:#0D47A1;" d="M174.225,303.616c1.76-11.04,11.328-19.2,22.624-19.2h47.04c92.448,0,164.8-37.248,185.952-144.992   c0.64-3.2,1.632-9.344,1.632-9.344c6.016-39.872-0.032-66.912-21.76-91.456C385.842,11.584,342.642,0,287.378,0H126.993   c-11.296,0-20.896,8.16-22.688,19.2L37.522,439.392c-1.312,8.288,5.152,15.776,13.6,15.776h99.008l24.864-156.48L174.225,303.616z"></path>
	<path style="fill:#0D47A1;" d="M243.889,312.704h-42.176L170.225,512h68.416c9.888,0,18.304-7.136,19.84-16.832l0.8-4.224   l15.744-98.912l1.024-5.44c1.536-9.696,9.952-16.832,19.808-16.832h12.512c80.864,0,144.16-32.576,162.656-126.816   c7.424-37.824,3.84-69.536-14.496-92.448C433.554,256.576,360.242,312.704,243.889,312.704z"></path>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
            <span style='font-weight:bold'>Click </span>
        </a>
    </div>
    <div class="deskripsi">
        <span class="judul">Donate <i class="fa fa-cc-visa" aria-hidden="true"></i> <i class="fa fa-cc-mastercard" aria-hidden="true"></i></span>
Support the site development with a cup of coffee. Cards accepted.<br/><b>eZcash - 0760070283</b>
    </div></div>
